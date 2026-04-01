import React from 'react';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";


import digitool from '../../assets/DigiTools.png';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-neutral-content p-10">
                <nav>
                    <img src={digitool} alt="" />
                    <p>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h3>Social Links</h3>
                    <div className='flex gap-3 items-center'>
                        <FaInstagramSquare />
                        <FaFacebook />
                        <FaSquareXTwitter></FaSquareXTwitter>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;