import React from 'react';
import Count3Buttons from "./Count3Buttons";
import {useSelector} from "react-redux";
import Count3Display from "./Count3Display";

const Count3 = () => {
    return (
        <div>
            <Count3Display/>
            <Count3Buttons/>
        </div>
    );
};

export default Count3;