import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './ContactUs.css'
export default function ContactUs(){
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
        <div className="BloodEvent">
    <div className="EventNavigation">
            

            <div className="allitems">
                <div className="feature">
                    <img className="myfeature" src="./hackimg/plus.png" alt=""/>
                    <Link to="/BloodEvents2">
                        <h4>Add Requests</h4>
                    </Link>

                </div>
                <div className="feature">
                    <img className="myfeature" src="./hackimg/user (2).png" alt=""/>
                    <Link to="Profile">
                        <h4>Profile</h4>
                    </Link>
                </div>


                <div className="feature">
                    <img className="myfeature" src="./hackimg/quote-request (1).png" alt=""/>
                    <Link to="/BloodRequests">
                        <h4>Blood Requests</h4>
                    </Link>
                </div>
            </div>
        </div>

        <div className="contactUs">
            <div className="donorform">
                <h2 className="received">Contact Us</h2>
                <div className="left">
                    <form action="#" className="contact-form">
                        <label htmlfor="name">Your name</label><br/>
                        <input className="name" name="your_name" type="text" placeholder="Ram Bahadur"/><br/><br/>
                        <label htmlfor="Phone Number">Phone Number</label><br/>
                        <input className="name" type="text" placeholder="John" name="phone"/><br/><br/>
                        <label htmlfor="Address">Address</label><br/>
                        <input className="name" type="text" placeholder="Katpadi" name="address"/><br/><br/>
                        <button className="sub" type="submit">Send Mail</button>

                    </form>
                </div>
            </div>

        </div>
    </div>
    </div>
    )
}