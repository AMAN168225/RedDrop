import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './MainPage.css';
export default function MainPage(){
    return(
    
        <div className="homePage">
            <Navbar/>
            <div className="quotes">
            <div className="lifesave">
                <h1>Donate Blood & Save a Life</h1>

                <p>Donating blood is a selfless act because it involves giving up one's own blood to help someone else
                    inneed.It is an act of kindness and generosity that does not require any monetary compensation.
                    Donating
                    blood can save lives, and it is a way to give back to the community and help those in need. It is an
                    act
                    of compassion and selflessness that can make a real difference in someone's life.
                </p>
            </div>
            
    
            <div className="buttons1">

                <Link to="/BloodEvents"><button className="donor1">Donate</button></Link>
                <Link to="/BloodEvents2"><button className="donor1">Receive</button></Link>
            </div>
            </div>
        </div>
    
    
    
    
    
    
    )
}