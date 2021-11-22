import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Customers from './screens/customers/Customers';
import New from './screens/new/New';
import NotFound from './screens/notFound/NotFound';
import Cart from './screens/cart/Cart';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="customers" element={<Customers />} />

        <Route path="new" element={<New />} />
        <Route path="new/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
