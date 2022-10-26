import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        items: []
    },
    reducers: {
        show(state, action) { 
            state.items = action.payload
        }
    },
})



export const catalogActions = catalogSlice.actions

export default catalogSlice