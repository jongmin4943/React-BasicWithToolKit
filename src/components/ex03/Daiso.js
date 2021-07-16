import React, {useState} from 'react';
import ItemList from "./ItemList";
import ItemCart from "./ItemCart";

const style ={
    display: "flex",
    flexDirection: "row",
}

const Daiso = () => {

    const [userItems, setUserItems] = useState([]);

    const addItemToCart = (item) => {
        setUserItems([...userItems,item])
    }

    return (
        <div>
           <h1>Welcome to Daiso</h1>
            <div style={style}>
                <ItemList addItemToCart={addItemToCart}/>
                <ItemCart userItems={userItems} />
            </div>
        </div>
    );
};

export default Daiso;