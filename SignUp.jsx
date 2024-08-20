
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {StudentContext} from './context';
import './SignUp.css';
export default function SignUp() {
    const { addStudent, students } = useContext(StudentContext); // Destructuring addStudent function and students array from context
    const [Name, setName] = useState('');
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { Name, Username, Email, Phone, Dob };
        console.log('New Student Data:', student); // Logging the student data before adding to context
        addStudent(student);
        setName('');
        setUsername('');
        setEmail('');
        setPhone('');
        setDob('');
    };

    console.log('Students in Context:', students); // Logging the students array from context

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
            <div className="menu2">
                <form onSubmit={handleSubmit} className="form">
                    <p className="topt">User Signup</p><br />
                    <label className="text1">Name</label>
                    <input className="fname" value={Name} onChange={(e) => setName(e.target.value)} type="text" /><br />
                    <label className="text1">Username</label>
                    <input className="uname" type="text" value={Username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label className="text1">E-mail</label>
                    <input className="email" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label className="text1">Mobile Number</label>
                    <input className="Phn" type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} /><br />
                    <label className="text1">Date Of Birth</label>
                    <input className="DOB" type="text" value={Dob} onChange={(e) => setDob(e.target.value)} /><br />
                    <button className="submit" type="submit">Sign Up</button>
                </form>
                <img src="./hackimg/signup2.jpg" alt="Bank Image" className="bankimage" />
            </div>
        </div>
    );
}