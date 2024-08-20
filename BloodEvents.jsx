
import { Link } from 'react-router-dom';
import './BloodEvents2.css';

export default function BloodEvents(){

    return (
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
                            <img className="myfeature" src="./hackimg/plus.png" alt="" />
                            <Link to="/BloodEvents2">
                                <h4>Add Requests</h4>
                            </Link>
                        </div>
                        <div className="feature">
                            <img className="myfeature" src="./hackimg/user (2).png" alt="" />
                            <Link to="/Profile">
                                <h4>Profile</h4>
                            </Link>
                        </div>
                        <div className="feature">
                            <img className="myfeature" src="./hackimg/quote-request (1).png" alt="" />
                            <Link to="/BloodRequests">
                                <h4>Blood Requests</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container4">
                    <div className="searchBar">
                        <div className="iconclass">
                            <input className="search" type="search" placeholder="Search for.." />
                            <img className="icon" src="./hackimg/magnifying-glass.png" alt="" />
                        </div>
                    
                        <div className="myIcons">
                            <img className="icon" src="./hackimg/notification (1).png" alt="" />
                            <img className="icon" src="./hackimg/email.png" alt="" />
                            <img className="icon" src="./hackimg/drop-silhouette.png" alt="" />
                        </div>
                    </div>
                    <form action='#' className="donor">
                        <div className='master'>
                        <div className="donorform">
                            <div className="received">Blood Donor Form</div>
                            <div className="cont">
                            
                                <label htmlFor="name">Your name</label>
                                <input className="name"  placeholder="Ram Bahadur" />
                                <label htmlFor="firstname">First Name of the patient</label>
                                <input className="name" type="text" placeholder="John" />
                                <label htmlFor="age">Age</label>
                                <input className="name"  type="text" placeholder="25" />
                           
                            
                                <label htmlFor="emailID">Email Address</label>
                                <input type="text" name="" className="name" placeholder="user@example.com" />
                                <label htmlFor="lastname">Last Name of the patient</label>
                                <input type="text" className="name" placeholder="Doe" />
                                <label htmlFor="bloodgroup">Blood Group</label>
                                <input className="name"  type="text" placeholder="A+" />
                           
                            </div>
                        </div>
                        <div className="contact">
                            <div className="received">Contact Info</div>
                            <div className="cont">
                            
                                <label htmlFor="name">Address</label>
                                <input className="info" type="text" placeholder="Your Address" />
                                <label htmlFor="firstname">City</label>
                                <input className="info"  type="text" placeholder="Chennai" />
                            
                                <label htmlFor="phone">Phone</label>
                                <input className="info" type="select" placeholder="Phone Number" />
                                <label htmlFor="country">Country (Only available in India for now)</label>
                                <input className="info" type="text" value="India" disabled style={{ backgroundColor: 'rgb(182, 182, 182)' }} />
                            
                            </div>
                        </div>
                        <div className="validity">
                            <div className="received">Validity Info</div>
                            <div className="cont">
                            
                                <label htmlFor="Medical">Upload your Medical certificate</label>
                                <input type="file" className='file' />
                            
                            
                                <label htmlFor="aadhar">Upload your Aadhar Card</label>
                                <input type="file" className='file' />
                            
                            </div>
                        </div>
                        </div>
                        
                     <center> <Link to="/BloodRequests"><button type="submit">Submit</button></Link></center>  
                        
                       
                        
                        
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

