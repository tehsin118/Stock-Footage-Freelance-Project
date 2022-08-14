import "./App.css";
import Navbar from "./components/LandingPage/Navbar/Navbar";
import Footer from "./components/LandingPage/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import MoreProducts from "./components/ProductPage/MoreProducts";
import SubCategory from "./components/Sub Category Products/SubCategory";
import FrameEditProduct from "./components/EditProduct/FrameEditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Product Page */}
        <Route path="/productDetail" element={<ProductPage />} />
        <Route path="/moreProducts" element={<MoreProducts />} />
        <Route path="/subCategory" element={<SubCategory />} />
        <Route path="/viewProduct" element={<FrameEditProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
