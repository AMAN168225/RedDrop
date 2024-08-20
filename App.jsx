// App.js

import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './sections/context';
import HomePage from './sections/HomePage';
import SignUp from './sections/SignUp';
import SignIn from './sections/SignIn';
import MainPage from './sections/MainPage';
import AboutUs from './sections/AboutUs';
import BloodEvents from './sections/BloodEvents';
import BloodEvents2 from './sections/BloodEvents2';
import ContactUs from './sections/ContactUs';
import BloodRequests from './sections/BloodRequests';
import Profile from './sections/Profile';
function App() {
const handleStudentAdd = (student) => {
setStudents(prevStudents => [...prevStudents, student]);
};
  return (
    <ContextProvider>
    <Router>
      
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/BloodEvents" element={<BloodEvents/>} />
        <Route path="/BloodEvents2" element={<BloodEvents2 />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/BloodRequests" element={<BloodRequests/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </Router>
     </ContextProvider>
  )
}

export default App;
