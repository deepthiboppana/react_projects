
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
       <Route index element={<Home/>}/>
       <Route path="products" element={<Products/>}/>
       <Route path="products:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
