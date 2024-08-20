import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'
export default function HomePage(){
    return(
        <div className="box">
        <div className="container">
            <header>
                <div className="container-1"><img className="logo" src="./hackimg/redlogo.jpeg" height="85"/></div>
            </header>
            <div className="content1">
                Give the gift of life
            </div>
            <div className="content2">
                A single drop of blood can make a huge difference.
            </div>
            <div className="details">
                <form action="#">
                <Link to="/SignUp"><button className="getstart1">
                        Sign Up
                    </button></Link>
                </form>
                <form action="#">
                <Link to="/SignIn"><button className="getstart2">
                        Sign In
                    </button></Link>
                </form>
            </div> 
            </div>
            </div>
  ) 
};