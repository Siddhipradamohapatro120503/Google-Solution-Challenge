import React, { useEffect, useState } from 'react';
import './App.css';
import Swiper from 'swiper';
import './swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.css';
import ScrollReveal from 'scrollreveal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Switch} from 'react-router-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
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

        // videoButton.addEventListener('click', playPause);

        function finalVideo() {
            videoIcon.classList.remove('ri-pause-line');
            videoIcon.classList.add('ri-play-line');
        }

        // videoFile.addEventListener('ended', finalVideo);

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
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<MainContent />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    
  );
}

export default App;
