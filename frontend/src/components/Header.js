import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import firebase from '../config'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [showSearch, setShowSearch] = useState(false); // Initialize showSearch to false
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            if (user) {
                setShowSearch(true); // Set showSearch to true if user is logged in
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.removeItem("user");
            await firebase.auth().signOut();
            setUser(null);
            setShowSearch(false); // Set showSearch to false after logout
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="/" className="nav__link">Selenify</Link>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        {showSearch && ( // Conditionally render search based on showSearch state
                            <li className="nav__item">
                                <Link onClick={() => setIsOpen(false)} to="/search" className="nav__link"><FaSearch /></Link>
                            </li>
                        )}
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#ngo" className="nav__link">NGOs</a>
                        </li>
                        <li className="nav__item">
                            <a href="#donations" className="nav__link">Donations</a>
                        </li>
                        <li className="nav__item">
                            <Link onClick={() => setIsOpen(false)} to="/community" className="nav__link">Community</Link>
                        </li>
                        {user ? (
                            <>
                                <li className="nav__item">
                                    <span className="nav__link">{user.displayName}</span>
                                </li>
                                <li className="nav__item">
                                    <button onClick={handleLogout} className=""><IoLogInOutline /></button>
                                </li>
                            </>
                        ) : (
                            <li className="nav__item">
                                <Link to="/profile" className="nav__link"><FaUser /></Link>
                            </li>
                        )}
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
    );
}

export default Header;
