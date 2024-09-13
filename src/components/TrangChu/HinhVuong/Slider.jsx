import React, { useState } from 'react';
import './slider.scss';
import { Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const HinhVuong = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

   // Hàm kiểm tra xem nút trước có nên hiển thị không
   const isPrevButtonVisible = currentIndex > 0;
   // Hàm kiểm tra xem nút tiếp theo có nên hiển thị không
   const isNextButtonVisible = items.length > 4 && currentIndex < items.length - 3;
 
   const handleNext = () => {
     if (isNextButtonVisible) {
       setCurrentIndex((prevIndex) => prevIndex + 1);
     }
   };
 
   const handlePrev = () => {
     if (isPrevButtonVisible) {
       setCurrentIndex((prevIndex) => prevIndex - 1);
     }
   };

  return (
    <div className="slider-container">
      {/* Hiển thị nút trái nếu còn có item để di chuyển */}
      {isPrevButtonVisible && (
        <button className="slider-button left" onClick={handlePrev} style={{  color: '#333', fontWeight: "500" }}>
          <LeftOutlined />
        </button>
      )}
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (        
            <Card
                // bordered={false}
                style={{
                    width: 400, border: "1px solid rgb(187, 187, 187)", marginRight: "8vh", height: 370, left: "20px", borderRadius: "15px"
                }}
            >
                <img src={item.src} alt={item.txtP} width={300} height={250} />
                <p style={{fontWeight: "500", fontSize: "3vh", width: "100%", textAlign: "center" }}>{item.txtP}</p>
            </Card>
        ))}
      </div>

      {/* Hiển thị nút phải nếu còn có item để di chuyển */}
      {isNextButtonVisible && (
        <button className="slider-button right" onClick={handleNext} style={{  color: '#333', fontWeight: "500" }}>
          <RightOutlined />
        </button>
      )}
    </div>
  );
};

export default HinhVuong;
