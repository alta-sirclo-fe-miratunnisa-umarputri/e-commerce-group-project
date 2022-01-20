import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyProduct from "./pages/MyProduct";
import Order from "./pages/Order";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <h1>App</h1>
      <Header />
      <Button />
      <Footer />
      <Home />
      <Order />
      <MyProduct />
      <Profile />
      <ProductDetail />
    </div>
  );
}

export default App;
