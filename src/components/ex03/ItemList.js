import React from 'react';
import itemService from "./itemService";

const ItemList = ({addItemToCart}) => {

    const ItemDetail = ({item}) => {
        return (
            <div>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <div><button onClick={()=>{addCart(item)}}>CLICK</button></div>
            </div>
        )
    }

    const list = itemService.getItems().map((item,idx)=>{
        return <ItemDetail item={item} key={idx}/>
    })

    const addCart = (item) => {
        console.log("add cart", item);
        addItemToCart(item);
    }

    return (
        <div style={{width:"70vw"}}>
            <h2>Item List</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
};


export default ItemList;