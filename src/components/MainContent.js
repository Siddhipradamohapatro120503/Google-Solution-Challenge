import React from 'react';


function MainContent() {
    return (
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
    );
}

export default MainContent;