import React from "react";
import AlertPage from "./components/AlertPage";
import { useState } from "react";
import locationContext from "./contexts/locationContext";
import geoLocationApi from "./services/geoLocationApi";
import "./style.css";
import sos from "./assets/sos.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {

    const [location, setLocation] = useState({});
    
    const onAlertHandler = async () => {
        console.log("Clicked")
        toast.info("Alerting the Police");
        let currLocation = await geoLocationApi();
        setLocation(currLocation);

        const response = await fetch('http://localhost:9001/alert', {
            body:JSON.stringify(location),
            method:"POST",

            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        }).then(res => res.json());
        toast.success("Alerted the police")
        console.log(response);

    }

    return (
        <div id="main" className="container">
            <locationContext.Provider value={location}>
                <AlertPage/>
            </locationContext.Provider>
            <div className="container">
            <div className="image-container" onClick={onAlertHandler}>
            <img src={sos} width={300} height={300}/>
            </div>
            <div className="text-container">
                <p className="text-center">After pressing the SOS button, we will<br></br>
                    alert the nearest police<br></br> station to your current location</p>
            </div>
            </div>
        <ToastContainer  autoClose={1000} theme="colored" newestOnTop={true} toastStyle={{ backgroundColor: "crimson" }} />
        </div>
    );
}