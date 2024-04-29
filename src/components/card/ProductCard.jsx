import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Button from "../button/Button";
import './card.scss'

const ProductCard = ({children}) => {

    const { cartItems, handleCartItems } = useContext(GlobalContext);

    // to find the index of product inside the cart items array
    const itemIndex = cartItems.findIndex(item => item.id === children.id)

    return (
        <div className="product-card">
            <div className='product-card--frame'>
                <img src={children.image} alt='' />
            </div>
            <Link to={`./product/${children.id}`}><h4>{children.title}</h4></Link>
            <Button type="primary" onClick={() => handleCartItems({ type: "ADD", product: children })}>{itemIndex === -1 ? "Add to Cart" : "Added"}</Button>
        </div>
    )
}

export default ProductCard;