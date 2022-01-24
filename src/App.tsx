import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import FormModal from "./components/FormModal";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import MyProduct from "./pages/MyProduct";
import Order from "./pages/Order";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import AuthContext from "./context/AuthContext";

// import EditProfile from "./pages/EditProfile";
// import EditPassword from "./pages/EditPassword";
// import AddItem from "./pages/AddItem";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <div>
        <Header />

        <div className="content-footer">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<FormModal />} />
              <Route path="/register" element={<FormModal />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
              <Route path="/myproduct" element={<MyProduct />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/productdetail" element={<ProductDetail />} />
              {/* <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/editpassword" element={<EditPassword />} />
              <Route path="/additem" element={<AddItem />} /> */}
            </Routes>
          </div>

          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
