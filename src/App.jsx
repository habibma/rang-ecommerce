import { Routes, Route, Outlet } from "react-router-dom";

import './App.scss';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Checkout from "./components/pages/Checkout";
import Login from "./components/pages/Login";
import ProductDetails from './components/product/[slug]';
import UserProfile from './components/user/[slug]';
import SignUp from "./components/pages/SignUp";
import FavoriteList from "./components/FavoriteList";
import Admin from "./components/admin/pages/Admin";

import Navbar from "./components/admin/Navbar";
import { default as AdminFooter } from "./components/admin/Footer";
import Menu from "./components/admin/Menu";
import Customers from "./components/admin/pages/Customers";
import Products from "./components/admin/pages/Products";
import { default as Orders } from "./components/admin/pages/Orders";
import Customer from "./components/admin/pages/Customer";
import Product from "./components/admin/pages/Product";


function App() {

  const Layout = () => {
    return (
      <div className="main-container">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Outlet />  {/* this section of page would be dynamically pages */}
          </div>
        </div>
        <AdminFooter />
      </div>
    )
  }

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="Login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path={`product/:id`} element={<ProductDetails />} />
        <Route path="profile/:activepage" element={<UserProfile />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:id" element={<Customer />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favorites" element={<FavoriteList />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
