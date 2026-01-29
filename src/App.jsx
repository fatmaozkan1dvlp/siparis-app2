import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import AddOrder from "./pages/AddOrders";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/add" element={<AddOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
