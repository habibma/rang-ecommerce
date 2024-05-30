import { Routes, Route, Outlet } from "react-router-dom";

import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Checkout from "./components/pages/Checkout";
import Login from "./components/pages/Login";
import ProductsList from './components/pages/Products/Products';
import ProductDetails from './components/pages/Products/[slug]';
import UserProfile from './components/pages/Profile/[slug]';
import SignUp from "./components/pages/SignUp";

import Navbar from "./components/admin/Navbar";
import { default as AdminFooter } from "./components/admin/Footer";
import Menu from "./components/admin/Menu";
import Customers from "./components/admin/pages/Customers";
import Products from "./components/admin/pages/Products";
import Orders from "./components/admin/pages/Orders";
import Customer from "./components/admin/pages/Customer";
import Product from "./components/admin/pages/Product";
import Dashboard from "./components/admin/pages/Dashboard";
import PrductDescription from "./components/pages/Products/PrductDescription";
import ProductRating from "./components/pages/Products/ProductRating";
import ProductPhotos from "./components/pages/Products/ProductPhotos";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Categories/[category]";


function App() {

  const UserLayout = () => {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )
  }

  const AdminLayout = () => {
    return (
      <div className="main-container">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <main className="content-container">
            <Outlet />
          </main>
        </div>
        <AdminFooter />
      </div>
    )
  }

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:id" element={<ProductDetails />}>
            <Route index element={<PrductDescription />} />
            <Route path="reviews" element={<ProductRating />} />
            <Route path="photos" element={<ProductPhotos />} />
          </Route>
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:category" element={<Category />} />
          <Route path="categories/:category/:id" element={<ProductDetails />}>
            <Route index element={<PrductDescription />} />
            <Route path="reviews" element={<ProductRating />} />
            <Route path="photos" element={<ProductPhotos />} />
          </Route>
          <Route path="profile" element={<UserProfile />}>
            <Route path=":activePage" element={<UserProfile />} />
          </Route>
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:id" element={<Customer />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App
