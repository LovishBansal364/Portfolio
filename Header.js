import React from 'react'
import profileImg from '../../assets/profileImg.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
        {/* header-content */}
        <div className='header-content'>
        <h1>Hy! Am</h1>
        <h2 className='fullname'>Lovish Bansal</h2>
        <h2>I'm a Full Stack Web Developer</h2>
        <p>A full-stack developer helps build and maintain both the front-end and the back-end of a website. Learn about full-stack developer skills, salary, and how you can become one. A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.</p>
        {/* payment links */}
        <div className='header-payment-container'>
            <button>Hire Me</button>
            <i className='fa-brands fa-paypal'></i>
            <i className='fa-brands fa-cc-visa'></i>
            <i className='fa-brands fa-cc-mastercard'></i>
            <i className='fa-brands fa-cc-amex'></i>
        </div>
        </div>
        {/* Image container  */}
        <div className='profile-img-container'>
            <img src={profileImg} alt='profile' />
            <div className='circle-1'></div>
            <div className='circle-2'></div>
        </div>
    </div>
  );
};

export default Header;