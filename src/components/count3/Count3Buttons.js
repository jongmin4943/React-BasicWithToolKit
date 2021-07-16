import React from 'react';
import {useDispatch} from "react-redux";
import {dec, inc} from "./countSlice";

const Count3Buttons = () => {

    const dispatch = useDispatch();

    const incraese = () => {
        dispatch(inc());
    }
    const decraese = () => {
        dispatch(dec());
    }

    return (
        <div>
            <button onClick={incraese}>++</button>
            <button onClick={decraese}>--</button>
        </div>
    );
};

export default Count3Buttons;