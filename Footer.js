import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-logo'>
            <img src={logo} alt='logo' />
        </div>

        {/* copyright */}
        <div className='footer-copyright'>
            <p>
            © 2023 RQLE Portfolio. All Right reserved
            </p>
        </div>

        {/* social */}
        <ul className='footer-social-media'>
            <li>
                <a href='https://www.facebook.com'><i className='fa-brands fa-facebook-f'></i></a>
            </li>
            <li>
                <a href='https://www.instagram.com'><i className='fa-brands fa-instagram'></i></a>
            </li>
            <li>
                <a href='https://www.twitter.com'><i className='fa-brands fa-twitter'></i></a>
            </li>
            <li>
                <a href='https://www.youtube.com'><i className='fa-brands fa-youtube'></i></a>
            </li>
            <li>
                <a href='https://lovishbansal364.github.io/Travel-Website/'><i className='fa-solid fa-blog'></i></a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer