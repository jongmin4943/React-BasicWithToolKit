import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const asyncGetTime = createAsyncThunk(
    'async/asyncTimeService',
    async ()=>{
        const res = await axios.get("http://localhost:8080/todo/now")
        return res.data;
    },
    {
        condition: (arg, {getState, extra}) => {
            const {msg} = getState()
            const fetchStatus = msg
            if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
                return false;
            }
        }
    }
)