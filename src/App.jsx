import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

const App =() =>{
 
  return(
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product /> }/>
          <Route path="/pricing" element={<Pricing /> }/>
          <Route path="/login"  element={<Login />} />
          <Route path="/App" element={<AppLayout /> }>
            <Route index element={<p>List of cities</p> } />
            <Route path="cities" element={<p>List of cities</p>} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="/*" element={<NotFound /> }/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;