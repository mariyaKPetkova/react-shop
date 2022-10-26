import { Trainers, Product, ProductAvailability, ProductDetails } from "../types"

const baseUrl = 'http://localhost:8080/api'


export const getAllProducts = async (category: string | undefined): Promise<Product[] | string> => {

    const response = await fetch(`${baseUrl}/catalog/${category}`)

    const items = await response.json()
    if (!response.ok) {
        throw new Error(items)
    }

    const result = Object.values(items)

    return result as Product[]
}

export const getProductById = async (id: string | undefined): Promise<ProductDetails> => {

    const response = await fetch(`${baseUrl}/details/${id}`)

    const item = await response.json()

    if (!response.ok) {
        throw new Error(item)
    }

    return item
}


export const getProductAvailability = async (id: string | undefined): Promise<ProductAvailability> => {

    const response = await fetch(`${baseUrl}/availability/${id}`)

    const item = await response.json()

    if (!response.ok) {
        throw new Error(item)
    }

    return item
}



export const getTrainers = async (category: string | undefined, criteria: string | undefined): Promise<Trainers[]> => {

    const response = await fetch(`${baseUrl}/trainers?category=${category}&criteria=${criteria}`)
    
    const items = await response.json()
    if (!response.ok) {
        throw new Error(items)
    }

    const result = Object.values(items)


    return result as Trainers[]
}