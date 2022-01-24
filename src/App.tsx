import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import AllProductsContext from "./context/AllProductsContext";

import EditProfile from "./pages/EditProfile";
import EditPassword from "./pages/EditPassword";
import AddItem from "./pages/AddItem";
import { Product } from "./interfaces/Product";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showAllProducts, setShowAllProducts] = useState<Product[]>([]);

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
      <AllProductsContext.Provider
        value={{
          allProducts,
          setAllProducts,
          showAllProducts,
          setShowAllProducts,
        }}
      >
        <div>
          <Header />

          <div className="content-footer">
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<FormModal />} />
                <Route path="/register" element={<FormModal />} />
                <Route path="/productdetail/:id" element={<ProductDetail />} />
                <Route
                  path="/cart"
                  element={isAuth ? <Cart /> : <Navigate to="/login" />}
                />
                <Route
                  path="/order"
                  element={isAuth ? <Order /> : <Navigate to="/login" />}
                />
                <Route
                  path="/myproduct"
                  element={isAuth ? <MyProduct /> : <Navigate to="/login" />}
                />
                <Route
                  path="/profile"
                  element={isAuth ? <Profile /> : <Navigate to="/login" />}
                />
                <Route
                  path="/editprofile"
                  element={isAuth ? <EditProfile /> : <Navigate to="/login" />}
                />
                <Route
                  path="/editpassword"
                  element={isAuth ? <EditPassword /> : <Navigate to="/login" />}
                />
                <Route
                  path="/additem"
                  element={isAuth ? <AddItem /> : <Navigate to="/login" />}
                />
              </Routes>
            </div>

            <footer className="footer">
              <Footer />
            </footer>
          </div>
        </div>
      </AllProductsContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
