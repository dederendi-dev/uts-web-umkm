import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ProductManagement from "./pages/ProductManagement";
import OrderManagement from "./pages/OrderManagement";
import Reports from "./pages/Reports";
import OrderForm from "./components/OrderForm/OrderForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-product" element={<ProductManagement />} />
        <Route path="/manage-order" element={<OrderManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;