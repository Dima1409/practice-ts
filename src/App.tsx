import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/products/ProductsPage";
import AboutPage from "./pages/about/AboutPage";
import MainPage from "./pages/main/mainPage";
import Navigation from "./components/Navigation/Navigation";
import CardPage from "./pages/carts/CartsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/carts" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
