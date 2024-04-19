import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}
