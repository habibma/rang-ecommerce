import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Button from "../button/Button";
import Like from "../Like/Like";
import Image from "../Image/Image";
import './card.scss';

const ProductCard = ({ children }) => {

    const { cartItems, handleCartItems, handleFavorites, favorites } = useContext(GlobalContext);

    const [searchParams] = useSearchParams()


    // to find the index of product inside the cart items array
    const itemIndex = cartItems.findIndex(item => item.id === children.id)
    // console.log(itemIndex);

    // to find the index of product inside the favorite list
    const favIndex = favorites.findIndex(item => item.id === children.id)
    // console.log(favIndex);


    return (
        <div className="product-card">
            <div className='product-card--frame'>
                <Link to={`${children.id}`} state={`?${searchParams.toString()}`}>
                    <Image src={children.image} alt={children.title} size="small" loading="lazy" height="150"></Image>
                </Link>
            </div>
            <Link to={`${children.id}`}><h4>{children.title}</h4></Link>
            <div className="product-card--action">
                <Button type="primary" onClick={() => handleCartItems({ type: "TOGGLE", product: children })}>{itemIndex === -1 ? "Add to Cart" : "Added"}</Button>
                <Like status={favIndex === -1 ? false : true} onChange={() => handleFavorites({ type: "TOGGLE", product: children })} />
            </div>
        </div>
    )
}

export default ProductCard;