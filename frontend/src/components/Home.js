import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header from './Header';

const Home = ({ user, hideHeader }) => {
    return (
        <main className="main">
            {hideHeader ? null : <Header />}
            {/* HOME */}
            <section className="home" id="home">
                <img src="assets/img/us01.jpg" alt="" className="home__img" />

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__data-subtitle">Peace & Harmony</span>
                        <h1 className="home__data-title">Empowering <br/> Justice <b>For <br/> Peaceful Societies</b></h1>
                    </div>

                    <div className="home__social">
                        <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                            <i className="ri-facebook-box-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="home__social-link">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">About Ourselves</h2>
                        <p className="about__description">We aim to deliver Justice and create strong peaceful Institutions by bringing the public one step closer to NGOs and welfare clubs. You can find communities to discuss or even petition a case/incident. 
                            One can also access laws according to their location, letting them know their and other's full rights.
                        </p>
                        <a href="#" className="button">Communities</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src="assets/img/aboutus01.jpg" alt="" className="about__img-one" />
                        </div>

                        <div className="about__img-overlay">
                            <img src="assets/img/aboutus02.jpg" alt="" className="about__img-two" />
                        </div>
                    </div>
                </div>
            </section>

            {/* NGO */}

            <section className="ngo section" id="ngo">

                <h2 className="section__title">NGOs</h2>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://savelifefoundation.org/wp-content/themes/slf/images/media/training-picture.jpg"
          alt="Save Life Foundation"
        />
        <Carousel.Caption>
          <h2>Save Life Foundation</h2>
          <p>Saving lives on roads in India and beyond.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.helpageindia.org/wp-content/uploads/2023/11/disability-blog-landing-image-final.jpg"
          alt="Help Age India"
        />
        <Carousel.Caption>
          <h2>Help Age India</h2>
          <p>Charity platform in India working with and for disadvantaged elderly for more than 4 decades.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/GDiai1BaUAAy3gD?format=jpg&name=large"
          alt="Cini India"
        />
        <Carousel.Caption>
          <h2>Cini India</h2>
          <p>Securing the educational rights of socio-economically disadvantaged children.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </section>
            
      
          {/* VIDEO */}
            <section className="video section">
                <h2 className="section__title">Intro Video</h2>
                <div className="video__container container">
                    <p className="video__description">Find what we aim to achieve and our visions, about justice, welfare societies and people.</p>
                    <div className="video__content">
                        <video id="video-file">
                            <source src="assets/video/video.mp4" type="video/mp4" />
                        </video>
                        <button className="button button--flex video__button" id="video-button">
                            <i className="ri-play-line video__button-icon" id="video-icon"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* DONATIONS */}
            <section className="donations" id="donations">
                <div className="donations__content">
                    <h2>Donate for the Cause</h2>
                    <p>Your support helps us make a difference. Every donation counts!</p>
                    <button className="donate-button button">Donate</button>
                </div>
            </section>

            {/* SUBSCRIBE */}
            <section className="subscribe section">
                <div className="subscribe__bg">
                    <div className="subscribe__container container">
                        <h2 className="section__title subscribe__title">Be A Member <br/> of Peacify</h2>
                        <p className="subscribe__description">Be a part of our Team and empower justice & peace.</p>
                        <form action="" className="subscribe__form">
                            <input type="text" placeholder="Enter email" className="subscribe__input" />
                            <button className="button">Join</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
