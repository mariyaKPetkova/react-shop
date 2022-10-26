const router = require('express').Router()
const { getAllItems, getItemById, getAvailability, getTrainers} = require('./request-helper')

const handleError = (res, err) => res.status(err?.response?.status || 520).json(err?.response?.data)

router.get('/catalog/:category', async (req, res) => {
    const category = req.params.category

    try {
        const result = await getAllItems(category)
        const products = result.data.products
        return res.json(products)
    } catch (err) {
        return handleError(res, err)

    }
})
router.get('/details/:id([a-zA-Z0-9]+)', async (req, res) => {
    const id = req.params.id

    try {
        const result = await getItemById(id)
        const product = result.data
        return res.json(product)
    } catch (err) {
        return handleError(res, err)

    }
})

router.get('/availability/:id([a-zA-Z0-9]+)', async (req, res) => {
    const id = req.params.id
    try {
        const result = await getAvailability(id)
        const availability = result.data
        return res.json(availability)
    } catch (err) {
        return handleError(res, err)

    }
})

router.get('/trainers', async (req, res) => {
    
    const {category, criteria}  = req.query
    const string = criteria !== ''? category+'&sort='+criteria : category
    
    
    try {
        const result = await getTrainers(string)
        
        const products = result.data.raw.itemList.items  
       
        return res.json(products)
    } catch (err) {
        return handleError(res, err)
    }
})
module.exports = router