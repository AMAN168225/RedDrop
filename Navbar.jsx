import './Navbar.css'
import { Link } from 'react-router-dom';
export default function  Navbar(){
    return(
        <div className="navBar">

                    <img className="logo1" src="./hackimg/redlogo.jpeg" alt=""/>
                <div className="buttons">
                <Link to="/MainPage"><button>Home</button></Link>
                    <Link to="/AboutUs"><button>About Us</button></Link>
                    <Link to="/BloodEvents"><button>Blood Event</button></Link>
                    <Link to="/ContactUs"><button>Contact Us</button></Link>
                </div>
                </div>
    )
}