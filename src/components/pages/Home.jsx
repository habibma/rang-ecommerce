import { useContext } from 'react';
import ProductCard from '../card/ProductCard';
import Menu from '../menu/index';
import { GlobalContext } from '../../context/Context';

const Home = () => {

    const { products, setSelect, select } = useContext(GlobalContext);

    return (
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
                <Menu onOpen={() => console.log("price clicked!")}>
                    <Menu.Button>Price</Menu.Button>
                    <Menu.Dropdown>
                        <Menu.Item>cheap</Menu.Item>
                        <Menu.Item>expensive</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
            <div className="products-list">
                {products.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
            </div>
        </section>
    );
}

export default Home;