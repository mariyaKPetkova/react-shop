import { configureStore, PreloadedState } from "@reduxjs/toolkit"

import catalogSlice from './catalog/slice'
import itemSlice from "./item/slice"
import cartSlice from "./cart/slice"
import trainersSlice from "./trainers/slice"

// import { createStore } from "redux"
export const rootReducer = {
    catalog: catalogSlice.reducer,
    item: itemSlice.reducer,
    cart: cartSlice.reducer,
    trainers: trainersSlice.reducer
}
const store = configureStore({
    reducer: rootReducer,

})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
      reducer:rootReducer,
      preloadedState
    })
  }


  export const initialState = {
        catalog: {
            items: []
        },
        item: {
            item: [],
            availability:[]
        },
        cart: {
            items: [],
            totalQuantity: 0,
            totalAmount: 0
        },
        trainers:{
            items: []
        }
    }
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof setupStore>
export default store