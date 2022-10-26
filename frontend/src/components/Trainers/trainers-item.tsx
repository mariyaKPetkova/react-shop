import { Link } from "react-router-dom"
import { Trainers } from "../../types"


// interface TrainersProps {
//     product: Trainers
// }
//const TrainersItem = ({ product }:TrainersProps) => {

const TrainersItem:React.FC<{product:Trainers}> = ({product})=>{
    
    return (
        <div className="prod-cart" >
            <img className="card-img-top" src={product?.image.src} alt="jsx-a11y/img-redundant-alt" />
            <div className="card-body">
            <h5 className="card-title">{product?.displayName}</h5>
                <p className="card-text">Rating: {product?.rating}</p>
                <p className="card-text">£ {product?.price}</p>
                <Link to={`/details/${product?.productId}`} className="btn btn-secondary">Details</Link>
            </div>
        </div>
    )
}
export default TrainersItem