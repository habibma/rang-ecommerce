import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";

const Cart = () => {
    const { cartItems, handleCartItems } = useContext(GlobalContext);

    return (
        <>
            <Header />
            {cartItems == 0 ?
                <section className="row"><p>Your Cart is Empty...</p></section> :
                <section className="row">
                    <h1>Cart</h1>
                    <div className="cart">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img className="thumbnail" src={item.image}></img>
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
                    <div><b>Total:</b> <span>{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)} $</span></div>
                    <Link to="/checkout"><Button type="btn-primary" text="Checkout" /></Link>
                </section>
            }
            <Footer />
        </>
    );
}

export default Cart;