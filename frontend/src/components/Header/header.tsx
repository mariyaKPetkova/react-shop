import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCountItems } from "../../store/cart/selectors"
import SearchBar from "../Search/search-bar"
import DropdownTrainers from "./dropdownTrainers"
import './header.css'

const Header = () => {
    const countProductsCart = useSelector(getCountItems)
    const showProductCountCart = countProductsCart > 0 ? <span className="badge rounded-pill badge-notification bg-danger">{countProductsCart}</span> : ''
    
    const mainTrainers = ['TRAINERS']
    const dropdownTrainers: string[] = ['men-trainers', 'women-trainers','kids-trainers']
   
    

    const renderingTrainers =  mainTrainers.map((trainer,index)=> <li key={index} className="nav-item dropdown">
    <Link to="#" className="nav-link dropdown-toggle"
        id="navbarDropdown" role="button"
        data-bs-toggle="dropdown" aria-expanded="false">{trainer}</Link>
    <DropdownTrainers categories={dropdownTrainers} />
</li>)
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>
                    
                    {renderingTrainers}
                    
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">CART{showProductCountCart}</Link>
                    </li>
                    <li id="search">
                        <SearchBar />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header