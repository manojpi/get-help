import "../style.css";
import alert from "../assets/alert.png";
import { useContext } from "react";
import locationContext from "../contexts/locationContext";


function AlertPage() {

    const location = useContext(locationContext);
    
    return (
        <div className="container">
            <img src={alert} width={300} height={300}/>
            <br/>
        </div>
    );
}

export default AlertPage;