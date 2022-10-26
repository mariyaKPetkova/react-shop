
import { renderWithProviders } from '../../test/testUtils'
import { setupStore } from '../../store'
import CartItem from './cartItem'
import { cartActions } from '../../store/cart/slice'


describe("Cart Item", () => {
    const cartItemDetails = {
        id: 'string',
        name: 'Name of the item',
        image: ' string',
        price: 20,
        quantity: 1,
        totalPrice: 20,
        size: 'string',
        sku: 'string'
    }
    const rootstate ={
            catalog: {
                items: []
            },
            item: {
                item: [],
                availability:[]
            },
            cart: {
                items: [{
                    id: 'string',
                    name: 'Name of the item',
                    image: ' string',
                    price: 20,
                    quantity: 1,
                    totalPrice: 20,
                    size: 'string',
                    sku: 'string'
                }],
                totalQuantity: 1,
                totalAmount: 20,
            },
            trainers:{
                items: []
            }
        }
    const store = setupStore(rootstate)

    describe('Get State', () => {
        renderWithProviders(<CartItem item={cartItemDetails} />, { store })
        test('items',()=>{
            expect(store.getState().cart.items.length).toBe(1)
        })
        test('total Quantity', () => {
            expect(store.getState().cart.totalQuantity).toBe(1)
        })
        test('total Price', () => {
            expect(store.getState().cart.totalAmount).toBe(20)
        })

        describe('Test addItem btn', () => {
            beforeEach(() => {
                store.dispatch(cartActions.addItem({items:cartItemDetails})) 
            })
            describe('Store', () => {
                test('Total Quantity', () => {
                    expect(store.getState().cart.totalQuantity).toBe(2)
                })
            })
        })
        describe('Test removeItem btn', () => {
            beforeEach(() => {
                store.dispatch(cartActions.removeItem(cartItemDetails))   
            })
            describe('Store', () => {  
                test('Total Quantity', () => {
                    expect(store.getState().cart.totalQuantity).toBe(1)
                })
                
            })

        })
        
    })
})