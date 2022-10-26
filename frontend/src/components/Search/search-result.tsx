import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import ProductItem from "../ProductItem/product-item"
import './plp.css'

import { showCatalog, showFilteredResult } from "../../store/catalog/actions"
import { useAppDispatch } from "../../hooks"
import { getItems } from "../../store/catalog/selectors"
import { FilterState } from "../../types"


const SearchResult = () => {

    
    const { seachedWord } = useParams()
    const dispatch = useAppDispatch()
    const [filteredItems, setfilteredItems] = useState<FilterState>({ items: [] })

    const items = useSelector(getItems)

    

    useEffect(() => {
        dispatch(showCatalog(seachedWord))
    }, [seachedWord, dispatch])

    useEffect(() => {
        dispatch(showFilteredResult(filteredItems.items))
    }, [filteredItems, dispatch])


   
    const sortingByPriceAscending = () => {
        const data = [...items]
        const result = data.sort((a, b) => a.prices.standard > b.prices.standard ? 1 : -1)
        setfilteredItems({ items: result })
    }
    const filterByGender = (str:string)=> {
        const filtered = items.filter(x => x.subTitle.includes(str))
        setfilteredItems({ items: filtered })
    }


    return (
        <><div>
            <ul className="filter-sort-bar">
                
                <li>
                    <button onClick={()=>filterByGender('Women')}><span>Women</span></button>
                </li>
                <li>
                    <button onClick={()=>filterByGender('Men')}><span>Men</span></button>
                </li>
                <li>
                    <button onClick={sortingByPriceAscending}><span>Price(Low-High)</span></button>
                </li>
            </ul>
        </div>
            {
                items.length
                    ? (<ul className="plp">
                        {items?.map((item, index) => <li key={index}><ProductItem key={item.productId} product={item} /></li>)}
                    </ul>)
                    : (<div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading</span>
                        </div>
                    </div>)
            }</>


    )
}

export default SearchResult