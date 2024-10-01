import { Routes, Route } from "react-router-dom";
import Home from "./pages/TrangChu/Home";
import Login from "./pages/Admin/Login";
import Register from "./pages/Admin/Register";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import PageViewDoctor from "./pages/TrangChu/ViewDoctor/pageViewDoctor";
import QuanLyDoctor from "./components/Admin/Doctor/QuanLyDoctor";

const App = () => {

  return (
    <>
      <Routes>
        {/* trang chu */}
        <Route path="/" element={<Home/>} />  
        <Route path="/view-doctor" element={<PageViewDoctor/>} />  


        {/* home page admin */}
        <Route path="/admin/home-page-admin" element={<HomeAdmin/>} />  
        {/* Login admin */}
        <Route path="/admin/login-admin" element={<Login/>} />  
        {/* Register admin */}
        <Route path="/admin/register-admin" element={<Register />} />  
        {/* quan ly doctor */}
        <Route path="/admin/quan-ly-doctor" element={<QuanLyDoctor />} />  


      </Routes>
    </>
  )
}

export default App;