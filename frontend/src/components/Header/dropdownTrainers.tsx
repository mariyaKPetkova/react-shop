import React from "react"
import { Link } from "react-router-dom"

const DropdownTrainers: React.FC<{ categories: string[] }> = (props) => {

    const changeName = (name:string)=>name.includes('-')?name.split('-').join(' ').toUpperCase(): name.toUpperCase()

    const renderingCategories = props.categories.map((category,index) => <li key={index}>
        <Link to={`/trainers/${category}`} className="dropdown-item">{changeName(category)}</Link>
    </li>)

    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {renderingCategories}
        </ul>
    )
}
export default DropdownTrainers