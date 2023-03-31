import React from 'react'
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <span className='icon'><Facebook fontSize="large" /></span>
                <span className='icon'><Twitter fontSize="large" /></span>
                <span className='icon'><Instagram fontSize="large" /></span>
            </div>
            <div className='copyright'>Copyright © 2023 Furry Paws Store.
            </div>
        </div>
    );
}

export default Footer;