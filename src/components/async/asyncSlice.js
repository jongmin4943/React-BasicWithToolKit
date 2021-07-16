import {createSlice} from "@reduxjs/toolkit";
import {asyncGetTime} from "./asyncTimeService";

const initState = {
    msg : "",
}

const AsyncSlice = createSlice({
    name:'asyncSlice',
    initialState:initState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
            .addCase(asyncGetTime.pending,(state,action)=>{
                return {msg:"Loading...."}
            })
            .addCase(asyncGetTime.fulfilled,(state, action) => {
                return {msg:action.payload}
            })
            .addCase(asyncGetTime.rejected,(state, action) => {
                return {msg:""}
            })
    }
})

export default AsyncSlice.reducer;