import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import Button from "../components/button/Button";
import Image from "../components/Image/Image";

const Cart = () => {
    const { cartItems, handleCartItems } = useContext(GlobalContext);

    return (
        <>
            {cartItems == 0 ?
                <section className="row cart-warning"><p>Your Cart is Empty...</p></section> :
                <section className="row">
                    <h1>Cart</h1>
                    <div className="cart">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <Image className="thumbnail" size="thumbnail" src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                                <span
                                    className="close"
                                    onClick={() => handleCartItems({ type: "REMOVE", product: item })}
                                >
                                    X
                                </span>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><b>Price: </b>${item.price} </td>
                                            <td>
                                                <b>Quantity: </b>
                                                <button
                                                    className="quantity"
                                                    onClick={() => handleCartItems({ type: "DECREMENT", product: item })}>
                                                    -
                                                </button>
                                                {item.quantity}
                                                <button
                                                    className="quantity"
                                                    onClick={() => handleCartItems({ type: "INCREMENT", product: item })}>
                                                    +
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                    <div><b>Total:</b> <span>{(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' }))}</span></div>
                    <Link to="/checkout"><Button type="primary">Checkout</Button></Link>
                </section>
            }
        </>
    );
}

export default Cart;