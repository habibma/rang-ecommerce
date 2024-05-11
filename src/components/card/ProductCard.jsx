import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Button from "../button/Button";
import Like from "../Like/Like";
import './card.scss'
import Image from "../Image/Image";

const ProductCard = ({ children }) => {

    const { cartItems, handleCartItems } = useContext(GlobalContext);

    // to find the index of product inside the cart items array
    const itemIndex = cartItems.findIndex(item => item.id === children.id)

    return (
        <div className="product-card">
            <div className='product-card--frame'>
                <Image src={children.image} alt='' size="small" />
            </div>
            <Link to={`./product/${children.id}`}><h4>{children.title}</h4></Link>
            <div className="product-card--action">
                <Button type="primary" onClick={() => handleCartItems({ type: "ADD", product: children })}>{itemIndex === -1 ? "Add to Cart" : "Added"}</Button>
                <Like onChange={() => console.log('Added to favorite list')}/>
            </div>
        </div>
    )
}

export default ProductCard;