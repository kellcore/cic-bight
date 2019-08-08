import React, { useState, useEffect } from 'react';
import Table from './Table';

function Inventory() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/inventory')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);
    // this is asynchronous data fetching!
    // if array is blank, it'll only fire once -> much like componentDidMount

    return (
        <div className="inventory-page">
            <h4> inventory </h4>
            <Table data={data} />
            {/* pre -> preformatted text */}
            {/* (data, null represents a function, 2 represents spacing) */}
        </div>
    )
};

export default Inventory;