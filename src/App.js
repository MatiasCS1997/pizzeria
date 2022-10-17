import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzasProvider from "./Context/DataProvider";
import Navbar from "./Components/Navbar";
import Home from "./views/Home";
import SearchPizzas from "./views/SearchPizzas";
import Cart from "./views/Cart";
function App() {
  return (
    <div className="App">
      <PizzasProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SearchPizzas />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PizzasProvider>
    </div>
  );
}

export default App;
