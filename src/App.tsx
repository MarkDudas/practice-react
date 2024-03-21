import Home from "../src/pages/home/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseMembership from "./pages/choosemembership/ChooseMembership";

function App(){
  

  return (
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} />
       
       <Route path="/choose-membership" element={<ChooseMembership />} />
       

       </Routes>
      
    </BrowserRouter>
  )
}

export default App
  
