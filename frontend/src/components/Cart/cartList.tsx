import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks"
import { showCart } from "../../store/cart/actions"
import { getTotalAmount, getCartItems, getCountItems } from "../../store/cart/selectors"
import CartItem from "./cartItem"

const Cart = () => {

    const dispatch = useAppDispatch()
    const items = useSelector(getCartItems)
    const countProductsCart = useSelector(getCountItems)
    const totalAmountCart = useSelector(getTotalAmount)
    useEffect(() => {

        dispatch(showCart(items))

    }, [items, dispatch])

    return (

            <section data-testid="cart-component" className="vh-900" >
                <div className="container h-900">
                    <div className="row d-flex justify-content-center align-items-center h-900">
                        <div className="col">
                            <p><span className="h2">Shopping Cart:  </span><span data-testid="cart-number-of-items"className="h3">{countProductsCart}</span></p>
                            
                            {items?.map(item =><CartItem key={item.id} item={item} />)}

                            <div className="card mb-5">
                                <div className="card-body p-4">

                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small text-muted me-2">Order total:</span> <span
                                                data-testid="cart-price-of-items" className="lead fw-normal">£{totalAmountCart}</span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button data-testid="add-to-cart-btn" type="button" className="btn btn-secondary">Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Cart