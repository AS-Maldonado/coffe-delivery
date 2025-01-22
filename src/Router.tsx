import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./pages/_layout/MainLayout";
import { HomePage } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { SaleConfirmed } from "./pages/SaleConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmed" element={<SaleConfirmed />} />
      </Route>
    </Routes>
  );
}
