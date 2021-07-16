import React from 'react';

const ItemCart = ({userItems}) => {



    return (
        <div style={{width:"30vw"}}>
            <h2>Item Cart</h2>
            <ul>
                {userItems.map((item,idx)=>{
                    return <li key={idx}>{item.name}</li>
                })}
            </ul>
            <h2>Total :  원</h2>
        </div>
    );
};

export default ItemCart;