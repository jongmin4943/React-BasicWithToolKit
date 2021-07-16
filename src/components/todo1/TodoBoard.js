import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoList from "./TodoList";
import {useSelector} from "react-redux";
import AsyncTime from "../async/AsyncTime";

const TodoBoard = () => {

    const {count} = useSelector(state => state.count);
    const userData = useSelector(state => state.signin);
    console.log(userData)

    const [now,setNow] = useState('');
    const [flag,setFlag] = useState(false);

    useEffect(()=>{
        todoService.getTime().then((res)=>{
            setNow(res.data);
        })
    },[flag])

    const getTime=()=>{
        setFlag(!flag);
    }

    return (
        <div>
            <h1>Simple Todo {count}</h1>
            {userData.id} : {userData.name}님
            <AsyncTime/>
            <button onClick={getTime}>CLICK</button>
            <TodoList/>
        </div>
    );
};

export default TodoBoard;