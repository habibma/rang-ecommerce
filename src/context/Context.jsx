import React, { createContext, useReducer, useState, useEffect, useCallback } from "react";
import reducer from "../hooks/reducer";
import { nanoid } from 'nanoid';

export const GlobalContext = createContext(null)

const GlobalState = ({ children }) => {

    // Products Page
    const [products, setProducts] = useState([]);
    const [select, setSelect] = useState("")

    // Fetching products data from fakestoreapi
    useEffect(() => {
        try {
            fetch(`https://fakestoreapi.com/products/${select && "category/" + select}`)
                .then(response => response.json())
                .then(data => setProducts(() => {
                    return data.map(item => {
                        return {
                            ...item,
                            quantity: 1
                        }
                    })
                }));
        }
        catch (error) {
            console.log(error)
        }
    }, [select]);


    // Cart page and product
    const [cartItems, dispatch] = useReducer(reducer, [])

    const handleCartItems = useCallback(input => {
        dispatch({ type: input.type, product: input.product })
    },[dispatch])


    //Orders Page
    const [orders, setOrders] = useState([])

    const handleOrders = (cartItems) => {
        setOrders(prevState => {
            const newArray = [...prevState]
            newArray.push({
                orderID: nanoid(),
                details: cartItems.map(item => item.title),
                date: Date().toString(),
                status: "on it's way",
                price: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
            });
            // console.log(newArray)
            return newArray;
        });
    };


    // Favorite List
    const [favorites, setFavorites] = useReducer(reducer, [])

    const handleFavorites = useCallback( input => {
        setFavorites({ type: input.type, product: input.product })
    }, [setFavorites])


    const value = {
        cartItems,
        handleCartItems,
        itemNumbers: cartItems.length,
        orders,
        handleOrders,
        favorites,
        handleFavorites,
        products,
        select,
        setSelect
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;