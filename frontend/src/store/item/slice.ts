import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'item',
    initialState: {
        item: [],
        availability:[]
    },
    reducers: {
        show(state, action) {
            state.item = action.payload
        },
        availability(state, action) {
            state.availability = action.payload
        }
    }
})



export const catalogActions = itemSlice.actions

export default itemSlice