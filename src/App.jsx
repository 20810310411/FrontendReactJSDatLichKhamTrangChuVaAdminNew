import { Routes, Route } from "react-router-dom";
import Home from "./pages/TrangChu/Home";
import Login from "./pages/Admin/Login";
import Register from "./pages/Admin/Register";
import HomeAdmin from "./pages/Admin/HomeAdmin";

const App = () => {

  return (
    <>
      <Routes>
        {/* trang chu */}
        <Route path="/" element={<Home/>} />  


        {/* home page admin */}
        <Route path="/home-page-admin" element={<HomeAdmin/>} />  
        {/* Login admin */}
        <Route path="/login-admin" element={<Login/>} />  
        {/* Register admin */}
        <Route path="/register-admin" element={<Register />} />  


      </Routes>
    </>
  )
}

export default App;