import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './product/ShopContextProvider';
import SearchBar from './SearchBar';
import logo from '../img/logo1.png';
import Cookies from 'js-cookie';
import '../css/homepage.css';

const Header = ({ openLoginModal, openRegisterModal, handleLogout }) => {
    const { getTotalCartCount } = useContext(ShopContext);
    const totalCartCount = getTotalCartCount();
    const isAdmin = Cookies.get('isAdmin') === '1';

    return (
        <div id="header">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="shop-name">H2T Computer Shop</div>
            <SearchBar />
            {/* <div className="search-bar">
                <input type="text" placeholder="Search for products..." />
                <i className="fas fa-search"></i>
            </div> */}
            <div className="auth-buttons">
                <div className="contact-info">
                    <button onClick={() => window.location.href = 'tel:19001900'}>
                        <i className="fas fa-phone-alt"></i>
                        <span>1900.1900</span>
                    </button>
                    <div className="dropdown">
                        <button className="btn-location" onClick={() => window.location.href = '#location'}>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Our location</span>
                        </button>
                        <div className="dropdown-content">
                            <p><i className="fas fa-thumbtack"></i> No.1, Dai Co Viet, Hai Ba Trung, Ha Noi</p>
                            <p><i className="fas fa-thumbtack"></i>No.2, District seven, Ho Chi Minh</p>
                        </div>
                    </div>
                    <Link to="/contact">
                        <button>
                            <i className="fas fa-headset"></i>
                            <span>Contact us</span>
                        </button>
                    </Link>
                    
                    <Link to="/aboutus">
                        <button>
                            <i className="fas fa-user-circle"></i>
                            <span>About us</span>                            
                        </button>
                    </Link>

                    <button onClick={() => window.location.href = '#news'}>
                        <i className="fas fa-newspaper"></i>
                        <span>Tech news</span>
                    </button>
                    {!isAdmin && (
                    <Link to="/cart">
                        <button className="btn-cart">
                        <i className="fas fa-shopping-cart"></i>
                            {totalCartCount > 0 && (
                                <span className="cart-count">{totalCartCount}</span>
                            )}
                        </button>
                    </Link>

                    )}
                    
                    {Cookies.get('userID') ? (
                        <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button className="btn btn-login" onClick={openLoginModal}>Login</button>
                            <button className="btn btn-register" onClick={openRegisterModal}>Register</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
