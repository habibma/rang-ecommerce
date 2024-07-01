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

export default reducer