import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App =() =>{
 
  return(
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product /> }/>
          <Route path="/pricing" element={<Pricing /> }/>
          <Route path="/*" element={<NotFound /> }/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;