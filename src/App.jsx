import NavBar from "./components/navbar/Nav";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Item from "./components/Item";

function App() {
  return (
    <div id='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item/:id' element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
