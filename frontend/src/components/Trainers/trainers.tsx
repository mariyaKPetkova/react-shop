import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../hooks"
import { showTrainers } from "../../store/trainers/actions"
import { getTrainers } from "../../store/trainers/selectors"
import { CriteriaState } from "../../types"
import Pagination from "../Pagination/pagination"
import '../Search/plp.css'
import TrainersItem from "./trainers-item"

const Trainers = () => {
    const { category } = useParams()
    const dispatch = useAppDispatch()
    const items = useSelector(getTrainers)
    const [sortingCriteria, setSortingCriteria] = useState<CriteriaState>({ criteria: '' })
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    useEffect(() => {
        dispatch(showTrainers(category, sortingCriteria.criteria))
    }, [category, sortingCriteria, dispatch])

    const sorting = (criteria: string) => {
        setSortingCriteria({ criteria: criteria })
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (number: number) => {
        setCurrentPage(number)
    }


    return (
        <><div>
            <ul className="filter-sort-bar">
                <li>
                    <button onClick={() => sorting('price-low-to-high')}><span>Price(Low-High)</span></button>
                </li>
                <li>
                    <button onClick={() => sorting('price-high-to-low')}><span>Price(High-Low)</span></button>
                </li>
                <li>
                    <button onClick={() => sorting('newest-to-oldest')}><span>Newest to Oldest</span></button>
                </li>
                <li>
                    <button onClick={() => sorting('top-sellers')}><span>Top Sellers</span></button>
                </li>
                <li>
                    <button onClick={() => sorting('top-rated')}><span>Top Rated</span></button>
                </li>
            </ul>
        </div>
            {
                currentItems.length
                    ? (<ul className="plp">
                        {currentItems?.map((item, index) => <li key={index}><TrainersItem key={item.productId} product={item} /></li>)}
                    </ul>)
                    : (<div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading</span>
                        </div>
                    </div>)

            }
            <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
        </>
    )
}
export default Trainers