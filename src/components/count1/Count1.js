import React, {useState} from 'react';

const Count1 = () => {

    const [num,setNum] = useState(0);

    const changeNum = (value) => {
        setNum(num+value)
    }

    return (
        <div>
            <h1>Counter1</h1>
            <CountDisplay num={num}/>
            <CountButtons changeNum={changeNum}/>
        </div>
    );
};

const CountDisplay = ({num}) => {
    return (
        <div><h2>{num}</h2></div>
    )
}

const CountButtons = ({changeNum})=> {
    return (
        <div>
            <button onClick={()=>{changeNum(1)}}>+</button>
            <button onClick={()=>{changeNum(-1)}}>-</button>
        </div>
    )   
}
export default Count1;