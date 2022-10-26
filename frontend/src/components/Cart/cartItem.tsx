import { useAppDispatch } from "../../hooks"
import { cartActions } from "../../store/cart/slice"
import { CartDetails } from "../../types"

const CartItem: React.FC<{ item: CartDetails }> = ({ item }) => {
    const dispatch = useAppDispatch()

    const addItemHandler = () => {
        dispatch(cartActions.addItem(item))
        dispatch(cartActions.increaseTotalAmount(item.price))
    }
    const removeItemHandler = () => {
        dispatch(cartActions.removeItem(item))
        dispatch(cartActions.decreaseTotalAmount(item.price))
    }
    return (

        <div data-testid="cart-item-component" className="card mb-4">
            <div className="card-body p-4">

                <div className="row align-items-center">
                    <div className="col-md-2">
                        <img src={item.image}
                            className="img-fluid" alt="jsx-a11y/img-redundant-alt" />
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <div>
                            <p className="small text-muted mb-4 pb-2">Name</p>
                            <p data-testid="cart-item-component-name" className="lead fw-normal mb-0">{item.name}</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <div>
                            <p className="small text-muted mb-4 pb-2">Size</p>
                            <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" ></i>
                                {item.size}</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <div>
                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                            <button data-testid="cart-item-component-remove-btn" className="btn btn-secondary" onClick={removeItemHandler}>-</button>
                            <p data-testid="cart-item-component-quantity"className="lead fw-normal mb-0">{item.quantity}</p>
                            <button data-testid="cart-item-component-add-btn" className="btn btn-secondary" onClick={addItemHandler}>+</button>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <div>
                            <p className="small text-muted mb-4 pb-2">Price</p>
                            <p className="lead fw-normal mb-0">£{item.price}</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                        <div>
                            <p className="small text-muted mb-4 pb-2">Total</p>
                            <p className="lead fw-normal mb-0">£{item.totalPrice}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default CartItem