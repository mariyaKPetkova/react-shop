export type Product = {
    name: string
    subTitle: string
    productId: string
    modelNumber: string
    prices: Price
    assets: Asset[]
}
export type Asset = {
    href: string
}
export type Price = {
    standard: number
    sale: number
}

export type ProductDetails = {
    id: string
    name: string
    pricing_information: PriceDetailPage
    product_description: Description
    product_link_list: LinkList[]
    view_list: ViewList[]
    size: string | null
}
export type ViewList = {
    image_url: string
}
export type Description = {
    title: string
    text: string
}
export type LinkList = {
    productId: string
    image: string
    altImage: string
}
export type PriceDetailPage = {
    currentPrice: number
    standard_price: number
    standard_price_no_vat: number
}

export type ProductAvailability = {
    id: string
    availability_status: string
    variation_list: Variation[]
}

export type Variation = {
    sku: string
    size: string
    availability: number
    availability_status: string
}
export type CartDetails = {
    id: string
    name: string
    image: string
    price: number
    quantity: number
    totalPrice: number
    size: string
    sku: string
}

export type CatalogState = {
    catalog: {
        items: Product[]
    }
}
export type ItemState = {
    item: {
        item: ProductDetails
    }
}
export type CartState = {
    cart: {
        items: CartDetails[]
        totalQuantity: number
        totalAmount: number
    }
}
export type ItemAvailability = {
    item: {
        availability: ProductAvailability
    }
}
export type SizeState = {
    size: string | null
}
export type SkuState = {
    sku: string | null
}
export type ErrorState = {
    error: string | null
}
export type SearchState = {
    word: string | undefined
}
export type FilterState = {
    items: Product[]
}
export type TrainersState = {
    trainers: {
        items: Trainers[]
    }
}
export type Trainers = {
    displayName: string
    subTitle: string
    altText: string
    category: string
    sport: string
    rating: number
    image: ImageTrainers
    productId: string
    price: number
}
export type ImageTrainers = {
    src: string
}
export type CriteriaState = {
    criteria: string
}