import { ItemAvailability, ItemState } from "../../types";


export const getItem = (state: ItemState) => state.item.item

export const getAvailability = (state: ItemAvailability) => state.item.availability