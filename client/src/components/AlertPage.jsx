import "../style.css";
import { useContext } from "react";
import locationContext from "../contexts/locationContext";
import sett from "../assets/sett.svg";




function AlertPage() {

    const location = useContext(locationContext);
    
    return (
        <div className="container-fluid">
            <nav className="navbar">
                <div className="container-fluid">
                    <button id="settings"><img src={sett} /></button>
                    <a id ="report" className="navbar-brand mx-auto fs-1 fw-bold">REPORT</a>
                </div>
            </nav>
        
            
            <br/>
        </div>
    );
}

export default AlertPage;