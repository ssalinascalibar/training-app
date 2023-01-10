import React from 'react'

import { useContext } from 'react';
import Context from '../Context';

import { Link } from 'react-router-dom';

import Logo from './Logo';

import navBar from '../assets/css/navBar.css';

export default function NavBar() {

    const {isAuth, logOut} = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">
                <Logo />
            </a>
            { isAuth ?
            <Link to="/login" onClick={logOut}><i className="fa-solid fa-circle-xmark"></i></Link> : <Link to="/login"><i className="fa-solid fa-user"></i></Link>

            } 
        </div>
    </nav>
  )
}
