import * as service from '../../services/service'

import { Dispatch } from 'redux'
import { catalogActions } from "./slice"


export const showItem = (id: string | undefined) => {
    

    return async (dispatch: Dispatch) => {

        const productData = await service.getProductById(id)
        
        dispatch(catalogActions.show(productData))

    }

}
export const showAvailability = (id: string | undefined) => {
    

    return async (dispatch: Dispatch) => {

        const availability = await service.getProductAvailability(id)
       // console.log(availability);
        
        dispatch(catalogActions.availability(availability))

    }

}