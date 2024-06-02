import { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

const Checkout = () => {

    const { cartItems, handleCartItems, handleOrders } = useContext(GlobalContext)

    const navigate = useNavigate();

    const [input, setInput] = useState({
        iban: "",
        bic: ""
    })

    const hadleSubmit = event => {
        event.preventDefault();
        setInput({
            iban: "",
            bic: ""
        });
        handleOrders(cartItems); // send the cart items to the ordered list
        handleCartItems({ type: "CLEAN", product: {} }) // to make the cart empty
        navigate("/profile/orders");
    }

    return (
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
            <div className="paying-methods">
                <div className="item">Dedit Card</div>
                <div className="item">Credit Card</div>
                <div className="item">Pay Pal</div>
            </div>
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
                <Button type="primary">Submit</Button>
            </form>
        </div>
    );
}

export default Checkout;
