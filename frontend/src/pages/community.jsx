import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style/community_style.css";
import axios from 'axios';
import CommunityCard from '../components/CommunityCard';
import firebase from '../config.js';
import CommunitySearch from '../components/CommunitySearch.jsx';

const Community = () => {
  const offcanvasRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let user = firebase.auth().currentUser || JSON.parse(localStorage.getItem('user'));

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);


  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Check if offcanvasRef is available before initializing the Offcanvas
    if (offcanvasRef.current) {
      // Importing Bootstrap JavaScript directly in React is not recommended
      // You should consider using React Bootstrap components or alternative libraries for better integration
      // If you still want to use Bootstrap JavaScript, you might need to import it differently depending on your build setup
      // For example, if you are using Webpack, you can import it like this:
      // import 'bootstrap/dist/js/bootstrap.bundle.min.js';
      // Then initialize Offcanvas like this:
      // new window.bootstrap.Offcanvas(offcanvasRef.current);
    }
  }, [offcanvasRef]);

  function raisePetition(e) {
    e.preventDefault();
    axios.post('http://localho.st:' + process.env.REACT_APP_BACKEND_PORT + '/add-community', {
      name: title,
      description: description,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const id = response.data.data.id;
        axios.post('http://localho.st:' + process.env.REACT_APP_BACKEND_PORT + '/add-member-to-community', {
          communityId: id,
          memberId: user?.uid,
        }).then((response) => {
          getCommunities();
          console.log('Member added to community:', response.data);
        })
          .catch((error) => {
            console.error('Error adding member to community:', error);
          });
        console.log('Petition raised successfully:', response);
        setTitle('');
        setDescription('');
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error raising petition:', error);
      });

  }

  function getCommunities() {
    axios.get('http://localho.st:' + process.env.REACT_APP_BACKEND_PORT + '/get-communities', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const data = response.data;
        const communityData = data.sort((a, b) => b.createdAt._seconds - a.createdAt._seconds);
        console.log('Fetched communities:', communityData);
        setCommunities(communityData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }


  useEffect(() => {
    const user = firebase.auth().currentUser || JSON.parse(localStorage.getItem('user'));
    if (!user) {
      window.location.href = '/profile';
      return;
    }
    getCommunities();
  }, []);


  return (
    <div className='background'>
    <nav className="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Selenify</a>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link active tabs" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tabs" href="#news">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tabs" href="#petition">Petition</a>
          </li>
        </ul>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel" ref={offcanvasRef}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Channels</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <CommunitySearch communities={communities} postJoin={getCommunities} />
          </div>
        </div>
      </div>
    </nav>

    {/* HOME */}
    <section id="home" className="home-dg container">
      <div className="row" data-bs-theme="dark">
        <h2 className="heading">Channels</h2>
          {
            communities.length === 0 ? <h3>No communities found</h3> :
            communities.map((community) => (
              CommunityCard(community, getCommunities, firebase)
            ))
          }
      </div>
    </section>

    {/* News */}
    <section id="news" className="news">
      <div className="news-up" data-bs-theme="dark">
        <h2 className="heading">News</h2>
        <div className="card mb-3">
          <img src="https://dynaimage.cdn.cnn.com/cnn/digital-images/org/5d2dab1a-866f-460b-a3de-c2534a3bade9.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Flood in Pune</h5>
            <p className="card-text">Massive flood in Pune. Can situation be any better?</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card mb-3">
          <img src="https://images.thequint.com/thequint%2F2015-07%2F79265aaf-9294-4c30-bf59-57f4504365ce%2FImphal-Hero-Final.jpg?w=1200&auto=format%2Ccompress&ogImage=true" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Strike in Manipur</h5>
            <p className="card-text">Female Marchers on Road to strike against...</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 8 mins ago</small></p>
          </div>
        </div>
        <div className="card mb-3">
          <img src="https://static01.nyt.com/images/2021/02/22/world/22Myanmar1-sub/merlin_184108077_dc441c99-11a9-4fb0-bebf-591a9de682b3-superJumbo.jpg?quality=90&auto=webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Are Good Days on its way?</h5>
            <p className="card-text">As the elections get over, people hope for development.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 21 mins ago</small></p>
          </div>
        </div>
      </div> 
    </section>

    {/* Petition */}
    <section id="petition" className="petition">
      <h2 className="heading">Petition</h2>
      <h3 className="text">Wanna Raise a Petition?</h3>
      <h4 className="text">Gain a vote of 50k, and your petition will be noticed and filed by respective welfare societies and NGOs</h4>
      <div className="d-grid gap-2 col-6 mx-auto h-100">
          <button className="btn btn-danger" type="button" onClick={handleToggleForm}>Raise Petition</button>
      </div>
    </section>
      {showForm && (<div className={`form-background ${showForm ? 'show' : ''}`}>
        <div className="form-overlay form-container" ref={formRef}>
          <form onSubmit={raisePetition} className="form-content">
            <div className="form-group mb-2">
              <label htmlFor="title"><b>Title of the Petition </b></label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="description"><b>Description of the Petition</b></label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      )}
    </div>

  );
}

export default Community;
