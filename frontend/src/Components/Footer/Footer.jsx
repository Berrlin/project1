import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    {/* <img style={{width: '50px'}} src={logo} alt="" /> */}
                    <h1>FERRARI COMPANY</h1>
                    <p>Established in 2020 as a distributor of Ferrari Company, one of the first joint venture car manufacturing companies in Vietnam. With the criteria of competition, creativity and always guiding customers with the right strategies, we are proud to be evaluated as a fast assembly and distribution company to have prestige throughout Vietnam today.</p>
                    <div className="footer-social-icons">
                        <img src={facebook_icon} alt="" />
                        <img src={twitter_icon} alt="" />
                        <img src={linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+84 938-490-983</li>
                        <li>maiquoctuan@tomato.com</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Collection</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ Car.com - All right Reserved</p>
        </div>


    )
}

export default Footer