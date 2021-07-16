import React from 'react';
import {useSelector} from "react-redux";

const Count3Display = () => {
    const {count} = useSelector(state => state.count);

    return (
        <div>

            <h1>{count}</h1>

        </div>
    );
};

export default Count3Display;