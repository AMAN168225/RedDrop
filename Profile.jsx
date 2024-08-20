import './Profile.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {StudentContext} from './context';
export default function Profile() {
    const { students } = useContext(StudentContext);

    return (
        <div className="homePage">
            <div className="navBar">
                <img className="logo1" src="./hackimg/redlogo.jpeg" alt="" />
                <div className="buttons">
                    <Link to="/MainPage"><button>Home</button></Link>
                    <Link to="/AboutUs"><button>About Us</button></Link>
                    <Link to="/BloodEvents"><button>Blood Event</button></Link>
                    <Link to="/ContactUs"><button>Contact Us</button></Link>
                </div>
            </div>
            <div className="Profile">
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
                    <h3>Profile</h3>
                    <table className="show" cellSpacing="0">
                        <thead>
                            <tr className="firstRow">
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Date Of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.Name}</td>
                                    <td>{student.Username}</td>
                                    <td>{student.Email}</td>
                                    <td>{student.Phone}</td>
                                    <td>{student.Dob}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}