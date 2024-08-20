import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
export default function SignIn(){
    return(
        <div className="homePage">
            <div className="navBar">

                    <img className="logo1" src="./hackimg/redlogo.jpeg" alt=""/>
                <div className="buttons">
                <Link to="/MainPage"><button>Home</button></Link>
                    <Link to="/AboutUs"><button>About Us</button></Link>
                    <Link to="/BloodEvents"><button>Blood Event</button></Link>
                    <Link to="/ContactUs"><button>Contact Us</button></Link>
                </div>
            </div>
            <div className="menu2">
            <img src="./hackimg/signin2.jpg" alt="Bank Image" className="bankimage" />
                <form action="#" className="form">
                    <p className="topt">User Login</p><br/><br/><br/>
                    <label className="text1">Username</label><br/>
                    <input className="enter" type="text" /><br/><br/>
                    <label className="text1">Password</label><br/>
                    <input className="enter" type="text"/><br/><br/>
                    <Link to="/MainPage"><button className="submit" type="submit">LogIn</button></Link>
                </form>
                
            </div>
        </div>
    )
}