import { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";

const Checkout = () => {

    const { cartItems, handleCartItems, isLoggedIn, handleOrders } = useContext(GlobalContext)

    const navigate = useNavigate();

    const [input, setInput] = useState({
        iban: "",
        bic: ""
    })

    const hadleSubmit = event => {
        event.preventDefault();
        // console.log(input);
        setInput({
            iban: "",
            bic: ""
        });
        handleOrders(cartItems); // send the cart items to the ordered list
        handleCartItems({ type: "CLEAN", product: {} }) // to make the cart empty
        isLoggedIn ? navigate("/profile/orders") : navigate("/Login");
    }

    return (
        <>
            <Header />
            <div className="checkout">
                <h1>Checkout</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id} className="checkout-item">
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><b>Total</b></td>
                            <td colSpan="2"><b>{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</b></td>
                        </tr>
                    </tfoot>
                </table>
                <form className="iban-info" onSubmit={hadleSubmit}>
                    <input
                        type="type"
                        placeholder="IBAN"
                        onChange={({ target }) => setInput(prevState => ({ ...prevState, iban: target.value }))}
                        value={input.iban}
                        required
                    />
                    <input
                        type="type"
                        placeholder="BIC"
                        onChange={({ target }) => setInput(prevState => ({ ...prevState, bic: target.value }))}
                        value={input.bic}
                        required
                    ></input>
                    <Button type="btn-primary" text="Submit" />
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Checkout;
