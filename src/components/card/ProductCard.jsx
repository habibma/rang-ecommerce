import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Button from "../button/Button";
import Like from "../like/Like";
import './card.scss'
import Image from "../image/Image";

const ProductCard = ({ children }) => {

    const { cartItems, handleCartItems, handleFavorites, favorites } = useContext(GlobalContext);

    // to find the index of product inside the cart items array
    const itemIndex = cartItems.findIndex(item => item.id === children.id)
    // console.log(itemIndex);

    // to find the index of product inside the favorite list
    const favIndex = favorites.findIndex(item => item.id === children.id)
    // console.log(favIndex);

    return (
        <div className="product-card">
            <div className='product-card--frame'>
                <Link to={`/product/${children.id}`}><Image src={children.image} alt='' size="small" /></Link>
            </div>
            <Link to={`/product/${children.id}`}><h4>{children.title}</h4></Link>
            <div className="product-card--action">
                <Button type="primary" onClick={() => handleCartItems({ type: "ADD", product: children })}>{itemIndex === -1 ? "Add to Cart" : "Added"}</Button>
                <Like status={favIndex === -1 ? false : true} onChange={() => handleFavorites({ type: "TOGGLE", product: children })} />
            </div>
        </div>
    )
}

export default ProductCard;