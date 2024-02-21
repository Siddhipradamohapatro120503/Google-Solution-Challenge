import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./style/community_style.css";

const Community = () => {
  const offcanvasRef = useRef(null);

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
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Channel 01</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Channel 02</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    {/* HOME */}
    <section id="home" className="home-dg container">
      <div className="row" data-bs-theme="dark">
        <h2 className="heading">Channels</h2>
        <div className="g-col-6 ch">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Children's Rights</h5>
              <p className="card-text">Update yourself with rights of a child</p>
              <a href="#" className="btn btn-outline-danger">Join</a>
            </div>
          </div>
        </div>
        <div className="g-col-6 ch">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Women's Rights</h5>
              <p className="card-text">Stay on track with recent updates on woman and their rights</p>
              <a href="#" className="btn btn-outline-danger">Join</a>
            </div>
          </div>
        </div>
        <div className="g-col-6 ch">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ON Sports</h5>
              <p className="card-text">Being an athlete, know your welfare clubs.</p>
              <a href="#" className="btn btn-outline-danger">Join</a>
            </div>
          </div>
        </div>
        <div className="g-col-6 ch">
          <div className="card ch">
            <div className="card-body">
              <h5 className="card-title">Student's Justice Club</h5>
              <p className="card-text">Join and discuss the Student's revolutions.</p>
              <a href="#" className="btn btn-outline-danger">Join</a>
            </div>
          </div>
        </div>
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
        <button className="btn btn-danger" type="button">Raise Petition</button>
      </div>
    </section>
    </div>
  );
}

export default Community;
