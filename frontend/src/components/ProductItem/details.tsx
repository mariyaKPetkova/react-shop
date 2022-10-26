
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { showAvailability, showItem } from '../../store/item/actions'
import { getAvailability, getItem } from '../../store/item/selectors'
import { useAppDispatch } from '../../hooks'
import './details.css'
import { ErrorState, ProductDetails, SizeState, SkuState, Variation } from '../../types'
import { cartActions } from '../../store/cart/slice'

const Details = () => {

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const item = useSelector(getItem)
    const availability = useSelector(getAvailability)
    const [size, setSize] = useState<SizeState>({ size: '' })
    const [sku, setSku] = useState<SkuState>({ sku: '' })
    const [error, setError] = useState<ErrorState>({ error: '' })

    useEffect(() => {

        dispatch(showItem(id))
        dispatch(showAvailability(id))

    }, [id, dispatch])

    const getProductVariations = (variation: Variation) => (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setSku({ sku: variation.sku })
        setSize({ size: variation.size })
        setError({ error: '' })
    }

    const addToCartHandler = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (size.size !== '') {
            dispatch(cartActions.addItemToCart({ item, size, sku }))
            dispatch(cartActions.increaseTotalAmount(item.pricing_information.currentPrice))
            setSku({ sku: '' })
            setSize({ size: '' })
        } else {
            setError({ error: 'Please select a size' });
        }
    }

    const getVariations = (item: ProductDetails) => {
        return item?.product_link_list
            .map((product, index) => (<div key={index} className="col-3 mt-1">
                <Link to={`/details/${product.productId}`} >
                    <img src={product.image} data-mdb-img={product.image} alt="..." className="w-100" />
                </Link>
            </div>))
    }

    const getItemAvailability = () => {
        return availability.variation_list?.filter(variation => variation.availability_status === "IN_STOCK")
            .map((variation, index) => {
                return <button key={index} className="btn btn-secondary" onClick={getProductVariations(variation)}>{variation.size}</button>
            })
    }

    const getFirstImage = (item: ProductDetails) => {
        return item?.view_list
            .map((image) => image.image_url)
            .slice(1)
            .map((image: string, index: number) => <button key={index} type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index + 1}
                aria-label={`Slide ${index + 2}`}></button>)
    }

    const getRestImages = (item: ProductDetails) => {
        return item?.view_list
            .map((image) => image.image_url)
            .slice(1)
            .map((image: string, index) => <div key={index} className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
            </div>)
    }

    return (<>
        {
            item.id
                ? (<>
                    <div className="product-info-images">
                        <div className="product-images">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    {getFirstImage(item)}
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={item?.view_list.map((image) => image.image_url).slice(0, 1)[0]} className="d-block w-100" alt="..." />
                                    </div>
                                    {getRestImages(item)}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="product-info">
                            <h5 className="card-title">{item?.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">£{item?.pricing_information.currentPrice}</h6>
                            <p className="card-text">{item?.product_description.text}</p>
                            <div className="table-availability">
                                {getItemAvailability()}
                            </div>
                            <div className="custom-error">{error.error}</div>
                            <button type="button" className="btn btn-secondary" onClick={addToCartHandler}>ADD TO CART</button>
                        </div>
                    </div>
                    <div className="product-variation">
                        <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                            <div className="row py-3 shadow-5">
                                {getVariations(item)}
                            </div>
                        </div>
                    </div>
                </>)
                : <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading</span>
                    </div>
                </div>
        }
    </>
    )
}

export default Details