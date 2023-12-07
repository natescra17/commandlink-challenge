import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./application"

export const store = configureStore({
    reducer: {
        application: applicationReducer
    }
})