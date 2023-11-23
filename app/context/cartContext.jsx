'use client';
import { createContext, useContext, useReducer } from 'react';

const initialState = {
    product: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "Add_to_Cart":
            console.log({
                ...state, product: [...state.product, {...action.payload}]
            })
                return {
                    ...state, product: [...state.product, {...action.payload}]
                }
    }
}

export const AddtoCartContext = createContext({
    state: initialState,
    dispatch: () => null
})

export const AddtoCartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <AddtoCartContext.Provider value={{state, dispatch}}>
            {children}
        </AddtoCartContext.Provider>
    )
}
export const useAddtoCartContext = () => useContext(AddtoCartContext)