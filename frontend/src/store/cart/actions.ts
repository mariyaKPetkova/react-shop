import {  Dispatch } from 'redux'

import {  CartDetails } from '../../types'
import { cartActions } from "./slice"


export const showCart = (items:CartDetails[]) => {
   
    return async (dispatch:Dispatch) => {

        dispatch(cartActions.show(items))

    }

}


