import { useState, useEffect } from 'react';
import ProductCard from '../card/ProductCard';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {

    const [products, setProducts] = useState([]);

    const [select, setSelect] = useState("")

    // Fetching products data from fakestoreapi
    useEffect(() => {
        try {
            fetch(`https://fakestoreapi.com/products/${select && "category/" + select}`)
                .then(response => response.json())
                .then(data => setProducts(() => {
                    return data.map(item => {
                        return {
                            ...item,
                            quantity: 1
                        }
                    })
                }));
        }
        catch (error) {
            console.log(error)
        }
    }, [select]);

    return (
        <>
            <Header />
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
                </div>
                <div className="products-list">
                    {products.map(product => <ProductCard key={product.id}>{product}</ProductCard>)}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;