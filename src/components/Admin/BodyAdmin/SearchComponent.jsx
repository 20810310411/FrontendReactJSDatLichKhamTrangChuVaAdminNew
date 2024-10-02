// SearchComponent.js
import React, { useState } from 'react';
import { Input, Col, Row } from 'antd';

const { Search } = Input;

const SearchComponent = ({ onSearch }) => {

    const [searchValue, setSearchValue] = useState('');
    let searchTimeout; // Định nghĩa biến bên ngoài


    const handleSearchChange = (value) => {
        setSearchValue(value);
        
        // Hủy timeout trước đó nếu có
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        
        // Tạo timeout mới
        searchTimeout = setTimeout(() => {
            onSearch(value); // Gọi hàm tìm kiếm
        }, 300); // Độ trễ 300ms
    };


    return (
        <Search 
            placeholder="Tìm kiếm ở đây..." 
            onSearch={onSearch} 
            enterButton 
            onChange={(e) => handleSearchChange(e.target.value)} // Gọi hàm xử lý thay đổi
        />
    );
};

export default SearchComponent;
