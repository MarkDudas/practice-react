import Home from "../src/pages/home/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseMembership from "./pages/choosemembership/ChooseMembership";
import Login from "./pages/login/Login"
function App(){
  

  return (
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
       
       <Route path="/choose-membership" element={<ChooseMembership />} />
       <Route path="/login" element={<Login />} />
       

       </Routes>
      
    </BrowserRouter>
  )
}

export default App
  
