import React, { useEffect, useState } from 'react';
import './App.css';
import Swiper from 'swiper';
import './swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.css';
import ScrollReveal from 'scrollreveal';

function App() {
    // State for managing theme
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        /*==================== SHOW MENU ====================*/
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        }

        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        }

        const navLink = document.querySelectorAll('.nav__link');

        function linkAction() {
            navMenu.classList.remove('show-menu');
        }

        navLink.forEach((n) => n.addEventListener('click', linkAction));

        /*==================== CHANGE BACKGROUND HEADER ====================*/
        function scrollHeader() {
            const header = document.getElementById('header');
            if (window.scrollY >= 100) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header');
        }
        window.addEventListener('scroll', scrollHeader);

        /*==================== SWIPER DISCOVER ====================*/
        let swiper = new Swiper('.discover__container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 32,
            coverflowEffect: {
                rotate: 0,
            },
        });

        /*==================== VIDEO ====================*/
        const videoFile = document.getElementById('video-file');
        const videoButton = document.getElementById('video-button');
        const videoIcon = document.getElementById('video-icon');

        function playPause() {
            if (videoFile.paused) {
                videoFile.play();
                videoIcon.classList.add('ri-pause-line');
                videoIcon.classList.remove('ri-play-line');
            } else {
                videoFile.pause();
                videoIcon.classList.remove('ri-pause-line');
                videoIcon.classList.add('ri-play-line');
            }
        }

        videoButton.addEventListener('click', playPause);

        function finalVideo() {
            videoIcon.classList.remove('ri-pause-line');
            videoIcon.classList.add('ri-play-line');
        }

        videoFile.addEventListener('ended', finalVideo);

        /*==================== SHOW SCROLL UP ====================*/
        function scrollUp() {
          const scrollUpElement = document.getElementById('scroll-up');
          if (scrollUpElement) {
              if (window.scrollY >= 200) {
                  scrollUpElement.classList.add('show-scroll');
              } else {
                  scrollUpElement.classList.remove('show-scroll');
              }
          }
      }
        window.addEventListener('scroll', scrollUp);

        /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
        const sections = document.querySelectorAll('section[id]');

        function scrollActive() {
            const scrollY = window.pageYOffset;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
                } else {
                    document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
                }
            });
        }

        window.addEventListener('scroll', scrollActive);

        /*==================== SCROLL REVEAL ANIMATION ====================*/
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2800,
        });

        sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
            origin: 'top',
            interval: 100,
        });

        sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`, {
            origin: 'left',
        });

        sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`, {
            origin: 'right',
            interval: 100,
        });

        /*==================== DARK LIGHT THEME ====================*/
        const themeButton = document.getElementById('theme-button');
        const darkTheme = 'dark-theme';
        const iconTheme = 'ri-sun-line';

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

        if (themeButton) {
            themeButton.addEventListener('click', () => {
                document.body.classList.toggle(darkTheme);
                themeButton.classList.toggle(iconTheme);
                localStorage.setItem('selected-theme', getCurrentTheme());
                localStorage.setItem('selected-icon', getCurrentIcon());
            });
        }

        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
            themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
        }
    }, []);
  return (
    <div className="App">
      <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">Peacify</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#laws" className="nav__link">Laws</a>
                        </li>
                        <li className="nav__item">
                            <a href="#discover" className="nav__link">Donations</a>
                        </li>
                        <li className="nav__item">
                            <a href="#place" className="nav__link">Community</a>
                        </li>
                    </ul>

                    <div className="nav__dark">
                        {/* Theme change button */}
                        <span className="change-theme-name">Dark mode</span>
                        <i className="ri-moon-line change-theme" id="theme-button"></i>
                    </div>

                    <i className="ri-close-line nav__close" id="nav-close"></i>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>

        <main className="main">
            {/*==================== HOME ====================*/}
            <section className="home" id="home">
                <img src="./assets/img/us01.jpg" alt="" className="home__img"/>

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__data-subtitle">Peace & Harmony</span>
                        <h1 className="home__data-title">Empowering <br/> Justice <b>For <br/> Peaceful Societies</b></h1>
                        {/* <a href="#" className="button">Explore</a> */}

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

                    <div className="home__info">
                        <div>
                            <span className="home__info-title">5 best places to visit</span>
                            <a href="" className="button button--flex button--link home__info-button">
                                More <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>

                        <div className="home__info-overlay">
                            <img src="assets/img/home2.jpg" alt="" className="home__info-img"/>
                        </div>
                    </div>
                </div>
            </section>

            {/*==================== ABOUT ====================*/}
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">About Ourselves</h2>
                        <p className="about__description">We aim to deliver Justice and create strong peaceful Institutions by bringing the public one step closer to NGOs and welfare clubs. You can find communities to discuss or even petition a case/incident. 
                            One can also access laws according to their location, letting them know their and other's full rights.
                        </p>
                        <a href="/" className="button">Communities</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src="assets/img/aboutus01.jpg" alt="" className="about__img-one"/>
                        </div>

                        <div className="about__img-overlay">
                            <img src="assets/img/aboutus02.jpg" alt="" className="about__img-two"/>
                        </div>
                    </div>
                </div>
            </section>
            
            {/*==================== DISCOVER ====================*/}
            <section className="discover section" id="discover">
                <h2 className="section__title">Discover Various<br/> NGOs</h2>
                
                <div className="discover__container container swiper-container">
                    <div className="swiper-wrapper">
                        {/*==================== DISCOVER 1 ====================*/}
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/ngo01.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Bali</h2>
                                <span className="discover__description">24 tours available</span>
                            </div>
                        </div>

                        {/*==================== DISCOVER 2 ====================*/}
                        <div className="discover__card swiper-slide">
                            <img src="./assets/img/ngo02.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Hawaii</h2>
                                <span className="discover__description">15 tours available</span>
                            </div>
                        </div>

                        {/*==================== DISCOVER 3 ====================*/}
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/ngo03.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Hvar</h2>
                                <span className="discover__description">18 tours available</span>
                            </div>
                        </div>

                        {/*==================== DISCOVER 4 ====================*/}
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/ngo01.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Whitehaven</h2>
                                <span className="discover__description">32 tours available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*==================== EXPERIENCE ====================*/}
            <section className="experience section">
                <h2 className="section__title">With Our Experience <br/> We Will Serve You</h2>

                <div className="experience__container container grid">
                    <div className="experience__content grid">
                        <div className="experience__data">
                            <h2 className="experience__number">20</h2>
                            <span className="experience__description">Year <br/> Experience</span>
                        </div>

                        <div className="experience__data">
                            <h2 className="experience__number">75</h2>
                            <span className="experience__description">Complete <br/> tours</span>
                        </div>

                        <div className="experience__data">
                            <h2 className="experience__number">650+</h2>
                            <span className="experience__description">Tourist <br/> Destination</span>
                        </div>
                    </div>

                    <div className="experience__img grid">
                        <div className="experience__overlay">
                            <img src="assets/img/experience1.jpg" alt="" className="experience__img-one"/>
                        </div>
                        
                        <div className="experience__overlay">
                            <img src="assets/img/experience2.jpg" alt="" className="experience__img-two"/>
                        </div>
                    </div>
                </div>
            </section>

            {/*==================== VIDEO ====================*/}
            <section className="video section">
                <h2 className="section__title">Video Tour</h2>

                <div className="video__container container">
                    <p className="video__description">Find out more with our video of the most beautiful and 
                        pleasant places for you and your family.
                    </p>

                    <div className="video__content">
                        <video id="video-file">
                            <source src="assets/video/video.mp4" type="video/mp4"/>
                        </video>

                        <button className="button button--flex video__button" id="video-button">
                            <i className="ri-play-line video__button-icon" id="video-icon"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/*==================== PLACES ====================*/}
            <section className="place section" id="place">
                <h2 className="section__title">Choose Your Place</h2>

                <div className="place__container container grid">
                    {/*==================== PLACES CARD 1 ====================*/}
                    <div className="place__card">
                        <img src="assets/img/place1.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bali</h3>
                                <span className="place__subtitle">Indonesia</span>
                                <span className="place__price">$2499</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/*==================== PLACES CARD 2 ====================*/}
                    <div className="place__card">
                        <img src="assets/img/place2.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">5,0</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bora Bora</h3>
                                <span className="place__subtitle">Polinesia</span>
                                <span className="place__price">$1599</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/*==================== PLACES CARD 3 ====================*/}
                    <div className="place__card">
                        <img src="assets/img/place3.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,9</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hawaii</h3>
                                <span className="place__subtitle">EE.UU</span>
                                <span className="place__price">$3499</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/*==================== PLACES CARD 4 ====================*/}
                    <div className="place__card">
                        <img src="assets/img/place4.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Whitehaven</h3>
                                <span className="place__subtitle">Australia</span>
                                <span className="place__price">$2499</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    {/*==================== PLACES CARD 5 ====================*/}
                    <div className="place__card">
                        <img src="assets/img/place5.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hvar</h3>
                                <span className="place__subtitle">Croacia</span>
                                <span className="place__price">$1999</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            </section>

            {/*==================== SUBSCRIBE ====================*/}
            <section className="subscribe section">
                <div className="subscribe__bg">
                    <div className="subscribe__container container">
                            <h2 className="section__title subscribe__title">Subscribe Our <br/> Newsletter</h2>
                            <p className="subscribe__description">Subscribe to our newsletter and get a 
                              special 30% discount.
                            </p>
                  
                            <form action="" className="subscribe__form">
                              <input type="text" placeholder="Enter email" className="subscribe__input" />
                  
                              <button className="button">
                                Subscribe
                              </button>
                            </form>
                          </div>
                        </div>
            </section>
            
            {/* <!--==================== SPONSORS ====================--> */}
            <section className="sponsor section">
                <div className="sponsor__container container grid">
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors1.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors2.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors3.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors4.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors5.png" alt="" className="sponsor__img"/>
                    </div>
                </div>
            </section>
        </main>

        {/* <!--==================== FOOTER ====================--> */}
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Travel</h3>
                        <p className="footer__description">Travel you choose the <br/> destination, 
                              we offer you the <br /> experience.
                            </p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="/" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">New & Blog</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Plan y Pricing</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Become a member</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="/" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2021 Bedimcode. All rigths reserved.</p>
                    <div className="footer__terms">
                        <a href="/" className="footer__terms-link">Terms & Agreements</a>
                        <a href="/" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
