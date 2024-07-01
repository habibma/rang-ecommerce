import React, { createContext, useReducer, useState, useEffect, useCallback } from "react";
import { nanoid } from 'nanoid';

export const GlobalContext = createContext(null)

const reducer = (state, action) => {
    let newArray = [...state]
    const itemIndex = newArray.findIndex(item => item.id === action.product.id) // to find the index of recieved action object's product within current state
    switch (action.type) {
        case "ADD": {
            if (itemIndex === -1) { // in case of lack of recived product
                newArray.push({ ...action.product, quantity: 1 }); //adding quantity to the product objet due to soving the bug which show NaN in Total Price
            }
            return newArray;
        }
        case "INCREMENT": {
            newArray = newArray.map(item => {
                if (item.id === action.product.id) {
                    return { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
                }
                return item;
            });
            return newArray;
        }
        case "DECREMENT": {
            newArray = newArray.map(item => {
                if (item.id === action.product.id) { //the quantity of the very proctuct is decremented not all available in cart
                    return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                }
                return item;
            });
            return newArray;
        }
        case "TOGGLE": {
            if (itemIndex === -1) {
                newArray.push({ ...action.product, quantity: 1 });
                return newArray;
            } else {
                newArray.splice(itemIndex, 1);
                return newArray;
            }
        }
        case "REMOVE": {
            newArray.splice(itemIndex, 1);
            return newArray;
        }
        case "CLEAN": {
            newArray = [];
            return newArray;
        }
        default: {
            return state;
        }
    }
};

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