import React, {useState} from 'react';
import HelloButton from "./HelloButton";

const HelloWorld = () => {

    const [hello,setHello] = useState("Hello World");
    const helloBtn = () => {
        setHello("Hell World");
    }
    return (
        <div>
            <h1>{hello}</h1>
            <HelloButton helloBtn = {helloBtn}/>
        </div>
    );
};

export default HelloWorld;