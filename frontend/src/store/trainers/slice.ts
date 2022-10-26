import { createSlice} from "@reduxjs/toolkit";

const trainersSlice = createSlice({
    name:'trainers',
    initialState:{
        items:[]
    },
    reducers:{
        show(state, action) { 
            state.items = action.payload
        }
    }
})

export const trainersActions = trainersSlice.actions

export default trainersSlice