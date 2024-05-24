import { useContext } from 'react';
import { GlobalContext } from '../../context/Context';
import ProductCard from '../card/ProductCard';
import Carousel from '../carousel/Carousel';
// import Menu from '../menu/Menu';

const Home = () => {

    const { products, setSelect, select } = useContext(GlobalContext);

    const slides = [
        {
            src: "https://picsum.photos/seed/img1/1250/500",
            alt: "image 1 for slider"
        },
        {
            src: "https://picsum.photos/seed/img2/1250/500",
            alt: "image 2 for slider"
        },
        {
            src: "https://picsum.photos/seed/img3/1250/500",
            alt: "image 3 for slider"
        },
    ]

    return (
        <>
            <Carousel data={slides}/>
            <section className="row">
                <div className="sort-bar">
                    <label htmlFor="categories">
                        Categories:
                    </label>
                    <select id="categories" className="category" value={select} onChange={({ target }) => setSelect(target.value)} >
                        <option value="" defaultValue>All</option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="women's clothing">women's clothing</option>
                    </select>
                    {/* <select defaultValue="">
                    <option>Price</option>
                </select> */}
                    {/* <Menu onOpen={() => console.log("price clicked!")}>
                    <Menu.Button>Price</Menu.Button>
                    <Menu.Dropdown>
                        <Menu.Item>cheap</Menu.Item>
                        <Menu.Item>expensive</Menu.Item>
                    </Menu.Dropdown>
                </Menu> */}
                </div>
                <div className="products-list">
                    {products.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
                </div>
            </section>
        </>
    );
}

export default Home;