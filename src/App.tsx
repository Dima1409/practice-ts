import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/products/ProductsPage";
import AboutPage from "./pages/about/AboutPage";
import MainPage from "./pages/main/mainPage";
import Navigation from "./components/Navigation/Navigation";
import CardPage from "./pages/carts/CartsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />}/>
          <Route path="products" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="carts" element={<CardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
