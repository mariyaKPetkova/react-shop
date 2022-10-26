import React from "react"
import { Provider } from 'react-redux'
import { configureStore, PreloadedState } from "@reduxjs/toolkit"
import { render, RenderOptions } from "@testing-library/react"
import { PropsWithChildren } from "react"
import store, { AppStore, initialState, rootReducer, RootState } from '../store/index'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}
function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={ store }> { children } </Provider>
}
export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = initialState,
        // Automatically create a store instance if no store was passed in
        store = configureStore({ reducer: rootReducer, preloadedState }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
   

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

