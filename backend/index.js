const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { initializeApp, cert } = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccountKey.json");

dotenv.config();
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const port = process.env.PORT || 3000;

app.post("/add-community", async (req, res) => {
  const commJoi = require("./models/community.joi");
  console.log(req.body);
  const { value, error } = commJoi.validate(req.body);
  console.log(value);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const communityRef = await db.collection("communities").add({
    ...value,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  res.json({
    status: "success",
    message: "Community added successfully!",
    data: { id: communityRef.id },
  });
});

app.get("/get-communities", async (req, res) => {
  const communities = [];
  const snapshot = await db.collection("communities").get();
  snapshot.forEach((doc) => {
    communities.push({ id: doc.id, ...doc.data() });
  });
  res.send(communities);
});

app.post("/add-member-to-community", async (req, res) => {
  const { communityId, memberId } = req.body;
  let communityRef = db.collection("communities").doc(communityId);
  const member = await communityRef.get();
  if (!member.exists) {
    return res.status(404).send("Community not found");
  }
  await communityRef.update({
    members: FieldValue.arrayUnion(memberId),
    updatedAt: Timestamp.now(),
  });

  communityRef = db.collection("communities").doc(communityId);
  const communityData = await communityRef.get();
  const memberLength = communityData.data().members.length;
  if (memberLength >= 5 && !communityData.data().status) {
    console.log("Petition");
    await communityRef.update({
      status: "petition",
      updatedAt: Timestamp.now(),
    });
  }

  res.json({
    status: "success",
    message: "Member added successfully!",
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
