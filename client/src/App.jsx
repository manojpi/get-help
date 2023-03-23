import AlertPage from "./components/AlertPage";
import { useState } from "react";
import locationContext from "./contexts/locationContext";
import geoLocationApi from "./services/geoLocationApi";



export default function App() {

    const [location, setLocation] = useState({});
    const onAlertHandler = async () => {
        setLocation(await geoLocationApi());
    }

    return (
        <>
            <locationContext.Provider value={location}>
                <AlertPage/>
            </locationContext.Provider>
            <div className="button">
                <button type="button" className="btn btn-outline-danger btn-lg" onClick={onAlertHandler}>Danger</button>
            </div>
        </>
    );
}