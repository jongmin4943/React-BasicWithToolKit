import React, {useState} from 'react';
import ListEx from "./ListEx";
import Cart from "./Cart";
import itemService from "../ex03/itemService";

const style ={
    display: "flex",
    flexDirection: "row",
}

const Stationery = () => {

    const [cart,setCart] = useState(itemService.getItems());
    const [checked, setChecked] = useState([]);

    const addToCart = (addedItem) => {
        setCart(cart.map((item)=>{
            if(item.name === addedItem.name) return {...item,count:item.count+1}
            return item;
            }
        ));
    }

    const resetCart = () => {
        setCart(itemService.getItems());
    }

    const deleteItems = (items) => {
        setChecked([]);
        setCart(cart.map((item)=>{
            if(items.includes(item.name)) return {...item,count:0};
            return item;
        }))
    }

    return (
        <div>
            <h1>Welcome to 문방구</h1>
            <div style={style}>
                <div style={{width:"70vw"}}>
                    {cart?.map((item,idx)=>
                        <ListEx
                        key={idx}
                        item={item}
                        addToCart={addToCart}
                        />
                    )}
                </div>
                <div style={{width:"30vw"}}>
                    <Cart 
                        cart={cart}
                        resetCart={resetCart}
                        deleteItems={deleteItems}
                        checked={checked}
                        setChecked={setChecked}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stationery;