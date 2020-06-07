import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({user}) => {
    return (
        <nav className ="ui fixed teal inverted menu">
        <Link className="item" to="/">Home</Link><br></br>
        <Link className="item" to="/chefs">Find a Chef</Link><br></br>
        <Link className="item" to="/cuisines">Cuisines</Link><br></br>
        <Link className="item" to="/about">About</Link><br></br>
        <Link className="item" to="/login" >Log In</Link><br></br>
        { user ?  <Link className="item" to="/profile">Profile</Link> : null}
       
      </nav>
    );
};

export default Nav;