import AboutUs from "./pages/AboutUs"
import Contacts from "./pages/Contacts"
import FAQ from "./pages/FAQ"
import MainPage from "./pages/MainPage"
import Portfolio from "./pages/Portfolio"
import Products from "./pages/Products"
import Services from "./pages/Services"
import './App.css';
import {Routes, Route} from "react-router-dom";
import Nav from "./components/layout/Nav"

function App() {
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/portfolio" element={<Portfolio/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
    </Routes>
    </>
  );
}

export default App;
