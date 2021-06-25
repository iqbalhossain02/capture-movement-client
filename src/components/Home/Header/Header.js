import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSlider from './HeaderSlider/HeaderSlider';

const Header = () => {
    return (
        <header>
           <HeaderSlider/>
            <div className="d-flex justify-content-between p-4 bg-dark text-white">
            <h4>RETURN THE ORIGINAL FORM TO YOUR GADGET. CALL US</h4>
           <Link to="/contract"><button className="btn-sm btn-primary font-weight-bold font-italic">CONTRACT US</button></Link> 
            </div>
        </header>
    );
};

export default Header;