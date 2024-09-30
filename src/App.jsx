// import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/navbar/Nav";
// import MainPage from "./components/main_page/MainPage";
// import Cart from "./components/cart/Cart";
// import { BillingInformation } from "./components/cart/Billing";
// import "./App.css";

// function App() {
//   return (
//     <div id='app' className='overflow-x-hidden overflow-y-hidden'>
//         <NavBar />
//         <Routes>
//           <Route path='/' element={<MainPage />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/billingInfo' element={<BillingInformation />} />
//         </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Nav";
import MainPage from "./components/main_page/MainPage";
import Cart from "./components/cart/Cart";
import { BillingInformation } from "./components/cart/Billing";
import CheckOut from "./components/cart/CheckOut";
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore'; // Import your Redux store
import "./App.css";

function App() {
  return (
    <Provider store={store}> {/* Wrap your app with the Redux Provider */}
      <div id='app' className='overflow-x-hidden overflow-y-hidden'>
        <NavBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/billingInfo' element={<BillingInformation />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
