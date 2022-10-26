import { Link } from "react-router-dom"
import { Product } from "../../types"
import './product-item.css'

interface ProductItemProps {
    product: Product
}
const ProductItem = ({ product }: ProductItemProps) => {
    
    return (
        <div className="prod-cart" >
            <img className="card-img-top" src={product?.assets[0].href} alt="jsx-a11y/img-redundant-alt" />
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
                <p className="card-text">ID: {product.productId}</p>
                <p className="card-text">£ {product.prices?.standard}</p>
                <Link to={`/details/${product.productId}`} className="btn btn-secondary">Details</Link>
            </div>
        </div>
    )
}
export default ProductItem