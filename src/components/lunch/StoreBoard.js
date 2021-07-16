import React from 'react';
import StoreList from "./StoreList";
import StoreCart from "./StoreCart";
import StoreMap from "./StoreMap";

const StoreBoard = () => {
    return (
        <div>
            <h1>Store Board</h1>
            <StoreMap/>
            <StoreList/>
            <hr/>
            <StoreCart/>
        </div>
    );
};

export default StoreBoard;