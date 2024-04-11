import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App =() =>{
 
  return(
    <div>
      <h1>Hello From Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product /> }/>
          <Route path="/pricing" element={<Pricing /> }/>
          <Route path="/*" element={<NotFound /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;