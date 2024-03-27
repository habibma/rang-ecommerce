import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Button from "../button/Button";
import './card.scss'

const ProductCard = (props) => {

    const { cartItems, handleCartItems } = useContext(GlobalContext);

    // to find the index of product inside the cart items array
    const itemIndex = cartItems.findIndex(item => item.id === props.id)

    return (
        <div className="product-card">
            <div className='product-card--frame'>
                <img src={props.image} alt='' />
            </div>
            <Link to={`./product/${props.id}`}><h4>{props.title}</h4></Link>
            <Button type="btn-primary" text={itemIndex === -1 ? "Add to Cart" : "Added"} onClick={() => handleCartItems({ type: "ADD", product: props })} />
        </div>
    )
}

export default ProductCard;