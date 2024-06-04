import { Routes, Route, Outlet } from "react-router-dom";

import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CustomeProfile from './pages/Profile/Profile';
import { Dashboard as CustomerDashbord, Orders as CustomerOrders, Setting } from './pages/Profile/UserAccount';
import UserInfo from './pages/Profile/UserInfo';
import PasswordChange from './pages/Profile/PasswordChange';
import FavoriteList from './pages/Profile/FavoriteList';
import ProductsList from './pages/Products/Products';
import ProductDetails from './pages/Products/[slug]';
import PrductDescription from "./pages/Products/PrductDescription";
import ProductRating from "./pages/Products/ProductRating";
import ProductPhotos from "./pages/Products/ProductPhotos";
import Categories from "./pages/Categories/Categories";
import Category from "./pages/Categories/[category]";
import NotFound from "./pages/NotFound";

import Navbar from "./admin/Navbar";
import { default as AdminFooter } from "./admin/Footer";
import Menu from "./admin/Menu";
import Customers from "./admin/pages/Customers";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Customer from "./admin/pages/Customer";
import Product from "./admin/pages/Product";
import Dashboard from "./admin/pages/Dashboard";
import { default as AdminLogin } from './admin/pages/Login'
import AuthRequired from "./components/aothRequired/AuthRequired";
import AdminAothRequired from "./components/aothRequired/AdminAothRequired";



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

          <Route element={<AuthRequired />}>
            <Route path="profile" element={<CustomeProfile />}>
              <Route index element={<CustomerDashbord />} />
              <Route path="orders" element={<CustomerOrders />} />
              <Route path="info" element={<UserInfo />} />
              <Route path="password" element={<PasswordChange />} />
              <Route path="setting" element={<Setting />} />
              <Route path="favorites" element={<FavoriteList />} />
            </Route>
          </Route>

          <Route path="admin-login" element={<AdminLogin />} />
        </Route>

        <Route element={<AdminAothRequired />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="customers/:id" element={<Customer />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App
