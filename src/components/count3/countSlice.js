const {createSlice} = require("@reduxjs/toolkit");

const initState = {
    count:0,
}

const countSlice = createSlice({
    name:"count",
    initialState:initState,
    reducers: {
        inc: (state, action) => {
            console.log("inc",action)
            return {count:state.count+1};
        },
        dec: (state, action) => {
            console.log("dec",action)
            return {count:state.count-1};
        }
    }
});

export const {inc,dec} = countSlice.actions;

export default countSlice.reducer;