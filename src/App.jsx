import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Nav";
import MainPage from "./components/main_page/MainPage";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
  return (
    <div id='app' className='overflow-x-hidden'>
        <NavBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;