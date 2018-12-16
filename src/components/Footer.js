import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; esc 2018</p>
                <div className="whitespace"></div>
                <Link to="/">contattaci</Link>
                <Link to="/">archivio</Link>
                <Link to="/">lettere</Link>
            </div>
        </footer>
    );
};

// Footer.propTypes = {

// }

export default Footer;