import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "./signinSlice";

const SigninButton = () => {
    const userObj = useSelector(state=>state.signin);
    const dispatch = useDispatch();
    const userData = {id:"good",name:"goodguy"}
    return (
        <div>
            {userObj.id === "" ? (
                <button onClick={()=>dispatch(login(userData))}>Sign-In</button>
            ) : (
                <button onClick={()=>dispatch(login({id:"",name:""}))}>Sign-OUT</button>
            )}
        </div>
    );
};

export default SigninButton;