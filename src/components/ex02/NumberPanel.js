import React, {useState} from 'react';
import DisplayPanel from "./DisplayPanel";
import ControlPanel from "./ControlPanel";
import makeNum from "../ex01/numService";
import OddEven from "../ex01/OddEven";

const NumberPanel = () => {

    const [num,setNum] = useState(makeNum());

    const change=()=>{
        setNum(makeNum());
        console.log("change......");
    }

    return (
        <div>
            <h1>Number Panel</h1>
            <DisplayPanel num={num}/>
            <OddEven num={num}/>
            <ControlPanel change={change}/>
        </div>
    );
};

export default NumberPanel;