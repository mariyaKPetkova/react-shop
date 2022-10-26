
import Cart from './cartList'
import { renderWithProviders } from '../../test/testUtils'
import { screen } from '@testing-library/react'
import store, { setupStore } from '../../store'
import { cartActions } from '../../store/cart/slice'


describe('Cart List', () => {
   const item = {
      id: 'string',
      name: 'string',
      view_list: [{ image_url: 'string' }],
      pricing_information: { currentPrice: 20 },
      quantity: 1,
      totalPrice: 20,
      size: 'string',
      sku: 'string'
   }
   const size = { size: 'string' }
   const sku = { sku: 'string' }

   test('get count by Test Id', () => {
      const store = setupStore()
      renderWithProviders(<Cart />, { store })
      const element = screen.getByTestId('cart-number-of-items')
      expect(element.textContent).toBe('0')
   })
   test('get price by Test Id', () => {
      const store = setupStore()
      renderWithProviders(<Cart />, { store })
      const element = screen.getByTestId('cart-price-of-items')
      expect(element.textContent).toBe('£0')
   })

   describe('test addItemToCart btn', () => {
      beforeEach(() => {
         //console.log(store.getState().cart.items)
         store.dispatch(cartActions.addItemToCart({ item, size, sku }))
         //console.log(store.getState().cart.items)
      })
      describe('Store', () => {
         test('Total Quantity', () => {
            expect(store.getState().cart.totalQuantity).toBe(1)
         })

      })

   })
})
