import React from "react";
import style from "./styleMap.module.css"
import MapView from "./MapView";

const MapModal = ({ handle }) => {

    return ( 
        <div className={style.overlay}>
            <div className={style.mapContainer}>
                <h4 onClick={handle}>X</h4>
                <div className={style.leafletContainer}>
                    <MapView />
                </div>
            </div>
        </div>
    );
}
 
export default MapModal;