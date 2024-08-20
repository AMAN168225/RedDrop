import Navbar from '../components/Navbar';
import './AboutUs.css'
export default function AboutUS(){
    return(
        
    <div className="AboutUs">
        <Navbar/>
            
        <div class="content">
            <h1>About Us</h1>
            <p className="about"><span>REDDROP</span> is a platform which fills the gap between blood donors and receivers who
                are
                in need
                Users can register as a donor or as a normal user.
                Hospitals can use the platform to find out which blood bank have the required units available and
                collect
                those units as needed.
            </p>
        </div>
    </div>
    )
}