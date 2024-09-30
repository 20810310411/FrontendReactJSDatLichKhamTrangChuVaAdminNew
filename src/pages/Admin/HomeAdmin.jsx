import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, HomeOutlined, HomeTwoTone, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {  Switch } from 'antd';
import { FaUserDoctor } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import MenuNav from '../../components/Admin/Menu/Menu';
import Login from './Login';

const HomeAdmin = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            // Nếu không có token, điều hướng về trang đăng nhập
            navigate("/admin/login-admin"); 
        }
    }, [navigate]);

    return (
        <>
            <div style={{ height: 250, 
                    textAlign: 'center', 
                    borderBottom: "1px solid #ebebeb", 
                    fontWeight: "bold", color: "black", backgroundColor: "#baf3d6",
                    marginTop: 0, padding: 0, 
                    }}>
                
            </div>
            
            <MenuNav />
            
        </>
    );
};
export default HomeAdmin;