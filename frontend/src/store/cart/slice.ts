import { createSlice } from "@reduxjs/toolkit";
import { CartDetails, ProductDetails } from "../../types";

const checkIfExist = (state: CartDetails[], sku: string) => {
    return state.find(item => item.sku === sku)
}
const createNewItem = (newItem: ProductDetails, prodSize: string, prodSku: string) => ({
    id: newItem.id,
    name: newItem.name,
    image: newItem.view_list[0].image_url,
    price: newItem.pricing_information.currentPrice,
    quantity: 1,
    totalPrice: newItem.pricing_information.currentPrice,
    size: prodSize,
    sku: prodSku
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as CartDetails[],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        show(state, action) {
            state.items = action.payload
        },
        addItemToCart(state, action) {


            const newItem = action.payload.item
            const prodSize = action.payload.size
            const prodSku = action.payload.sku


            const existingItem = checkIfExist(state.items, prodSku.sku)
            if (!existingItem) {
                state.items.push(createNewItem(newItem, prodSize.size, prodSku.sku))

            } else {

                existingItem.quantity++
                existingItem.totalPrice += existingItem.price

            }
            state.totalQuantity++
        },
        addItem(state, action) {

            const newItem = action.payload

            const existingItem = checkIfExist(state.items, newItem.sku)
            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += existingItem!.price
            }

            state.totalQuantity++

        },
        removeItem(state, action) {
            const item = action.payload
            const sku = item.sku


            const existingItem = checkIfExist(state.items, sku)
            if (existingItem?.quantity === 1) {
                state.items = state.items.filter(item => item.sku !== sku)
            } else {
                if (existingItem) {
                    existingItem.quantity--
                    existingItem.totalPrice -= existingItem.price
                }
            }

            state.totalQuantity--

        },
        decreaseTotalAmount(state, action) {
            state.totalAmount -= action.payload
        },
        increaseTotalAmount(state, action) {
            state.totalAmount += action.payload
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice


