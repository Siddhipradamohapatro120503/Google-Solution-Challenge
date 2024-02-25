import React from "react";

function Footer() {
  return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=61556933634584&sk=about" target="_blank" className="footer__social">
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                            <a href="https://twitter.com/SelenifyJustice" target="_blank" className="footer__social">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/SelenifyJustice" target="_blank" className="footer__social">
                                <i className="ri-instagram-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
        </footer>
  );
}

export default Footer;
