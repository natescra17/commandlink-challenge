import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload.data
        },
        resetData: (state, action) => {
            state.data = []
        }
    }
})

export const setData = applicationSlice.actions.setData;
export const resetData = applicationSlice.actions.resetData;

export default applicationSlice.reducer;