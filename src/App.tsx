import { Routes, Route } from "react-router-dom";

import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MyProduct from "./pages/MyProduct";
import Order from "./pages/Order";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
