import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { Product } from "./pages/product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />}/>
        </Route>
      </Routes>
    </>
  );
}
