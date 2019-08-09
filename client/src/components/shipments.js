import React, { useState, useEffect } from 'react';
import ShipmentsList from './ShipmentsList';

function Shipments() {
    const [shipments, setShipments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/shipments')
            .then(res => res.json())
            .then(shipmentData => setShipments(shipmentData));
    }, [])
    // always fires on the first time
    // next time, it will only fire if it has dependency in it that's changed
    // will not call useEffect if nothing has changed
    return (
        <div className="shipments-page">
            <h4> shipments </h4>
            <ShipmentsList shipments={shipments} />
        </div>
    )
};

export default Shipments;