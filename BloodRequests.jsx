
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {BloodEventsContext} from './context';
import './BloodRequests.css';

export default function BloodRequests() {
    const { events } = useContext(BloodEventsContext);

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
            <div className="BloodRequest">
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
                <div className="show1">
                    <h3>Blood Requests</h3>
                    <table className="show" cellSpacing="0">
                        <thead>
                            <tr className="firstRow">
                                <th>Name</th>
                                <th>Blood Group</th>
                                <th>Location</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={index}>
                                    <td>{event.Name1}</td>
                                    <td>{event.Bloodgroup}</td>
                                    <td>{event.Location}</td>
                                    <td>{event.Age}</td>
                                    <td><button>Donate</button></td> {/* Assuming this button is for donation */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

