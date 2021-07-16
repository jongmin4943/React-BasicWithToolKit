import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../components/count3/countSlice";
import signinSlice from "../components/signin/signinSlice";
import asyncSlice from "../components/async/asyncSlice";

export const store = configureStore({
    reducer: {
        count: countSlice,
        signin: signinSlice,
        async: asyncSlice,
    }
})