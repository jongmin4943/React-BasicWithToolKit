import React, {useState} from 'react';
import storeService from "./storeService";
import cartService from "./cartService";

const style = {
    cursor : "pointer",
}
const ulStyle = {
    cursor : "pointer",
    listStyle: "none",
}

const StoreList = () => {

    const [stores,setStores] = useState(storeService.getStores());

    const list = stores.map((store,idx)=><li onClick={()=>cartService.append(store)} key={idx}>{store.name}</li>)

    const searchByCat = (str) => {
        const filteredStores = storeService.getByCat(str);
        setStores(filteredStores);
    }

    return (
        <div>
            <div>
                <b onClick={()=>{searchByCat("")}} style={style}>ALL </b>
                <b onClick={()=>{searchByCat("한식")}} style={style}> 한식 </b>
                <b onClick={()=>{searchByCat("중식")}} style={style}> 중식 </b>
                <b onClick={()=>{searchByCat("양식")}} style={style}> 양식 </b>
                <b onClick={()=>{searchByCat("일식")}} style={style}> 일식</b>
            </div>
            <ul style={ulStyle}>
                {list}
            </ul>
        </div>
    );
};

export default StoreList;