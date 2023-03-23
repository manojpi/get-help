import "../style.css";
import geoLocationApi from "../services/geoLocationApi";

export default function AlertPage() {
    
    return (
        <>
            <button type="button" class="btn btn-outline-danger" onClick={geoLocationApi}>Danger</button>  
        </>
    );
}