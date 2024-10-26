import { Routes, Route } from "react-router-dom";
import Home from "./pages/TrangChu/Home";
import Login from "./pages/Admin/Login";
import Register from "./pages/Admin/Register";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import PageViewDoctor from "./pages/TrangChu/ViewDoctor/pageViewDoctor";
import QuanLyDoctor from "./components/Admin/Doctor/QuanLyDoctor";
import QuanLyChucVu from "./components/Admin/ChucVu/QuanLyChucVu";
import QuanLyPhongKham from "./components/Admin/PhongKham/QuanLyPhongKham";
import QuanLyChuyenKhoa from "./components/Admin/ChuyenKhoa/QuanLyChuyenKhoa";
import KeHoachKhamBenh from "./components/Admin/KeHoachKhamBenh/KeHoachKhamBenh";
import PageDatLichKham from "./pages/TrangChu/DatLich/datLichKhamDoctor";
import LoginPage from "./pages/TrangChu/Login/Login";
import RegisterPage from "./pages/TrangChu/Login/Register";

const App = () => {

  return (
    <>
      <Routes>
        {/* trang chu */}
        <Route path="/" element={<Home/>} />  
        {/* xem chi tiet bac si */}
        <Route path="/view-doctor" element={<PageViewDoctor/>} />  
        {/* page dat lich kham */}
        <Route path="/page-dat-lich-kham" element={<PageDatLichKham/>} />  
        {/* login benh-nhan */}
        <Route path="/user/login-benh-nhan" element={<LoginPage/>} /> 
        {/* Register benh-nhan */}
        <Route path="/user/register-benh-nhan" element={<RegisterPage />} />  


        {/* home page admin */}
        <Route path="/admin/home-page-admin" element={<HomeAdmin/>} />  
        {/* Login admin */}
        <Route path="/admin/login-admin" element={<Login/>} />  
        {/* Register admin */}
        <Route path="/admin/register-admin" element={<Register />} />  
        {/* quan ly doctor */}
        <Route path="/admin/quan-ly-doctor" element={<QuanLyDoctor />} />  
        {/* quan ly chuc vu */}
        <Route path="/admin/quan-ly-chuc-vu" element={<QuanLyChucVu />} />  
        {/* quan ly phong kham */}
        <Route path="/admin/quan-ly-phong-kham" element={<QuanLyPhongKham />} />  
        {/* quan ly chuyen khoa */}
        <Route path="/admin/quan-ly-chuyen-khoa" element={<QuanLyChuyenKhoa />} />  
        {/* ke hoach kham benh */}
        <Route path="/admin/ke-hoach-doctor" element={<KeHoachKhamBenh />} />  


      </Routes>
    </>
  )
}

export default App;