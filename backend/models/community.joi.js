const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(100).required(),
  members: Joi.array().items(Joi.string()).default([]),
  image: Joi.string().uri().default("https://picsum.photos/200/300"),
});
// Path: backend/models/community.model.js
