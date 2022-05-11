import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllWallets from "./components/AllWallets/AllWallets";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home";
import NewWallet from "./components/NewWallet/NewWallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Todos" element={<AllWallets />} />
        <Route exact path="/Favoritos" element={<Favorites />} />
        <Route exact path="/Agregar" element={<NewWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
