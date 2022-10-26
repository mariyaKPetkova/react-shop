import { Dispatch } from "redux"
import * as service from '../../services/service'
import { trainersActions } from "./slice"


export const showTrainers = (category: string | undefined, criteria: string | undefined) => {

    return async (dispatch: Dispatch) => {

        const productsData = await service.getTrainers(category,criteria)
   
        
        dispatch(trainersActions.show(productsData))

    }

}