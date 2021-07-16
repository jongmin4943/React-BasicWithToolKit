import {createSlice} from "@reduxjs/toolkit";

const userState = {
    id:'',
    name:'',
}

const signinSlice = createSlice({
    name: 'signin',
    initialState: userState,
    reducers: {
        login: (state,action) => {
            return (dispatch) => {

            }
            // return {...state,id:action.payload.id,name:action.payload.name}
        }
    }
})

export const {login} = signinSlice.actions

export default signinSlice.reducer