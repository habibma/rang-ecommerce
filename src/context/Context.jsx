import React, { createContext, useReducer, useState, useEffect, useRef, useCallback } from "react";
import { nanoid } from 'nanoid';
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signOut, updateProfile, updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null)

const reducer = (state, action) => {
    let newArray = [...state]
    const itemIndex = newArray.findIndex(item => item.id === action.product.id) // to find the index of recieved action object's product within current state
    switch (action.type) {
        case "ADD": {
            if (itemIndex === -1) { // in case of lack of recived product
                newArray.push({ ...action.product, quantity: 1 }); //adding quantity to the product objet due to soving the bug which show NaN in Total Price
            }
            // console.log(newArray)
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


    // Login page
    // const [signInInputs, setSignIninputs] = useState({
    //     username: "",
    //     password: "",
    // });

    // const handleSignIn = ({ target }) => {
    //     const { value, name } = target;
    //     setSignIninputs(prevState => {
    //         return ({
    //             ...prevState,
    //             [name]: value
    //         })
    //     })
    // }
    // const passwordRef = useRef(null)
    // const usernameRef = useRef(null)

    // const [currentUser, setCurrentUser] = useState({ user: "", isLoggedIn: false })
    // const [error, setError] = useState();

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     // setSignIninputs({ username: "", password: "" })


    //     //firebase check
    //     signInWithEmailAndPassword(auth, signInInputs.username, signInInputs.password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             // console.log(user.email)
    //             setCurrentUser({ user, isLoggedIn: true })
    //             navigate(`profile`)
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             if (errorCode === "auth/invalid-email") {
    //                 usernameRef.current.focus();
    //             }
    //             if (errorCode === "auth/missing-password") {
    //                 passwordRef.current.focus();
    //             }
    //             setError(errorMessage)
    //         });
    // }


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


    // Setting Page
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setCurrentUser(prevState => ({ ...prevState, isLoggedIn: false }))
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }


    const value = {
        cartItems,
        handleCartItems,
        // signInInputs,
        // handleSignIn,
        // handleSubmit,
        itemNumbers: cartItems.length,
        orders,
        handleOrders,
        handleLogOut,
        // currentUser,
        // setCurrentUser,
        // error,
        // usernameRef,
        // passwordRef,
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