import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetTime} from "./asyncTimeService";

const AsyncTime = () => {

    const dispatch = useDispatch();
    const {msg} = useSelector(state => state.async)
    useEffect(()=>{
        dispatch(asyncGetTime());
    },[])

    const time = () => {
        dispatch(asyncGetTime());
    }

    return (
        <div>
            <h2>AsyncTime : {msg}</h2>
            <button onClick={time}>timer</button>
        </div>
    );
};

export default AsyncTime;