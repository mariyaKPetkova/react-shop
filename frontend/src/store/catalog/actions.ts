import * as service from '../../services/service'
import { Dispatch } from 'redux'
import { catalogActions } from "./slice"
import { Product } from '../../types'


export const showCatalog = (category: string | undefined) => {

    return async (dispatch: Dispatch) => {

        const productsData = await service.getAllProducts(category)
        
        dispatch(catalogActions.show(productsData))

    }

}
export const showFilteredResult = (filtered:Product[]) => {

    return  (dispatch: Dispatch) => {

        dispatch(catalogActions.show(filtered))

    }

}