import React, {useEffect, useState} from 'react';
import cartService from "./cartService";
const ulStyle = {
    listStyle: "none",
}
const StoreCart = () => {

    const [flag, setFlag] = useState(false);
    const changeFlag = () => {
        setFlag(!flag)
    }

    useEffect(()=>{
        cartService.setFn(changeFlag);
    },[])

    const list = cartService.getAll()
        .map((item,idx)=>{
            return <li key={idx}>{item.name}<button onClick={()=>cartService.remove(item)}>DEL</button></li>
        });


    return (
        <div>
            <ul style={ulStyle}>
                {list}
            </ul>
        </div>
    );
};

export default StoreCart;