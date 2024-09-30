import { Avatar, Button, Col, Divider, Drawer, Row } from 'antd'
import Footer from '../../../components/TrangChu/Footer/Footer'
import HeaderViewDoctor from '../../../components/TrangChu/Header/HeaderViewDoctor'
import './pageViewDoctor.scss'
import {  DownOutlined, HomeOutlined, LikeFilled, UserOutlined } from '@ant-design/icons'
import { FaLocationDot, FaRegHandPointUp } from 'react-icons/fa6'
import { useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoIosShareAlt } from 'react-icons/io'

 
const PageViewDoctor = () => {

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('bottom');
    const [showDetails, setShowDetails] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <div className='layout-app'>
                <HeaderViewDoctor />
                {/* <div className='body-view-doctor'>
                    <Row>
                        <Col span={24} style={{backgroundColor: "white", height: "7vh"}}>
                            <p style={{ color: "rgb(69, 195, 210)", fontSize: "15px", marginLeft: "5px", top: "-5px", position: "relative"}}>
                                <HomeOutlined /> /Khám chuyên khoa/ Cơ xương khớp
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={21} sm={21} xs={21} span={21} push={3} style={{backgroundColor: "white",}}>
                            <p style={{fontSize: "30px", marginTop: "10px", fontWeight: "500"}}>BSCKII Dương Minh Trí</p>
                            <p style={{fontSize: "15px", marginTop: "-20px", color: "#999999", lineHeight: "22px"}}>Trưởng khoa Nội Cơ Xương Khớp, Bệnh viện Nhân dân Gia Định <br/>
                            Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp  <br/>
                            Bác sĩ nhận khám cho bệnh nhân từ 16 tuổi trở lên</p>
                            <p style={{fontSize: "15px", marginTop: "-5px",}}><FaLocationDot />
                                <span style={{marginLeft: "5px"}}>Thành phố Hồ Chí Minh</span>
                            </p>
                        </Col>

                        <Col md={3} sm={24} xs={24} span={3} pull={21} style={{backgroundColor: "white", textAlign: "center"}}>
                            <Avatar src={"https://cdn.bookingcare.vn/fo/w256/2021/06/15/152136-bs-tri.jpg"} size={120} icon={<UserOutlined />} />    
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12} style={{backgroundColor: "greenyellow",}}>
                            <Col span={24} style={{backgroundColor: "white"}}>
                                <p  onClick={showDrawer} 
                                    style={{
                                        color: "rgb(69, 195, 210)", fontWeight: "500", fontSize: "16px", padding: "10px", cursor: "pointer"
                                    }}>
                                    Hôm nay - 30/9 
                                    <DownOutlined style={{fontSize: "14px", marginLeft: "10px", fontWeight: "600"}} /> 
                                    <hr style={{ width: "140px", margin: "5px 0 0"}}/>
                                </p>

                                <Drawer
                                    title="Thông tin lịch khám bệnh của bác sĩ"
                                    placement={placement}
                                    closable={false}
                                    onClose={onClose}
                                    open={open}
                                    key={placement}
                                >
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Drawer>
                            </Col>    

                            <Col span={24}  style={{backgroundColor: "white", top: "-10px", position: "relative"}}>
                                <p style={{
                                    color: "gray", fontSize: "16px", fontWeight: "500", padding: "10px"
                                }}>
                                    <FaRegCalendarAlt />
                                    <span style={{marginLeft: "10px"}}>LỊCH KHÁM</span>    
                                </p>
                            </Col> 

                            

                        </Col>
                        <Col span={12} style={{backgroundColor: "whitesmoke",}}>col-12</Col>
                    </Row>
                </div> */}

                <Row>
                    <Col span={18} className='body-view-doctocc'>
                        <Row>
                            <Col span={24} style={{backgroundColor: "white", height: "7vh"}}>
                                <p style={{ color: "rgb(69, 195, 210)", fontSize: "15px", marginLeft: "5px", top: "-5px", position: "relative"}}>
                                    <HomeOutlined /> /Khám chuyên khoa/ Cơ xương khớp
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={21} sm={21} xs={21} span={21} push={3} style={{backgroundColor: "white",}}>
                                <p style={{fontSize: "30px", marginTop: "10px", fontWeight: "500"}}>BSCKII Dương Minh Trí</p>
                                <p style={{fontSize: "15px", marginTop: "-20px", color: "#999999", lineHeight: "22px"}}>
                                    Trưởng khoa Nội Cơ Xương Khớp, Bệnh viện Nhân dân Gia Định <br/>
                                    Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp  <br/>
                                    Bác sĩ nhận khám cho bệnh nhân từ 16 tuổi trở lên
                                </p>
                                <p style={{fontSize: "15px", marginTop: "-5px",}}><FaLocationDot />
                                    <span style={{marginLeft: "5px"}}>Thành phố Hồ Chí Minh</span>
                                </p>
                                <Button type="primary" style={{marginRight: "10px", fontSize: "14px"}} icon={<LikeFilled />}>Thích 0</Button>                                
                                <Button type="primary" style={{fontSize: "14px"}} icon={<IoIosShareAlt />}>Chia sẻ</Button>
                            </Col>

                            <Col md={3} sm={24} xs={24} span={3} pull={21} style={{backgroundColor: "white", textAlign: "center"}}>
                                <Avatar src={"https://cdn.bookingcare.vn/fo/w256/2021/06/15/152136-bs-tri.jpg"} size={120} icon={<UserOutlined />} />    
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12} style={{backgroundColor: "white", borderRight: "1px solid rgba(228, 228, 221, 0.637)"}}>
                                <Col span={24} style={{backgroundColor: "white"}}>
                                    <p  onClick={showDrawer} 
                                        style={{
                                            color: "rgb(69, 195, 210)", fontWeight: "500", fontSize: "16px", padding: "10px 0", cursor: "pointer"
                                        }}>
                                        Hôm nay - 30/9 
                                        <DownOutlined style={{fontSize: "14px", marginLeft: "10px", fontWeight: "600"}} /> 
                                        <hr style={{ width: "140px", margin: "5px 0 0"}}/>
                                    </p>

                                    <Drawer
                                        title="Thông tin lịch khám bệnh của bác sĩ"
                                        placement={placement}
                                        closable={false}
                                        onClose={onClose}
                                        open={open}
                                        key={placement}
                                    >
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                    </Drawer>
                                </Col>    

                                <Col span={24}  style={{backgroundColor: "white", top: "-18px", position: "relative"}}>
                                    <p style={{
                                        color: "gray", fontSize: "16px", fontWeight: "500", padding: "10px 0"
                                    }}>
                                        <FaRegCalendarAlt />
                                        <span style={{marginLeft: "10px"}}>LỊCH KHÁM</span>    
                                    </p>
                                    <Row justify="start" style={{marginTop: "-10px"}}>
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>  
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>  
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>  
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>  
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>  
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>  
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>                                        
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>
                                        <Col span={4} className='cach-deu'>
                                            <div className='lich-kham'>
                                                16:30 - 17:00
                                            </div>
                                        </Col>
                                    </Row>
                                </Col> 

                                <Col span={24}  style={{backgroundColor: "white", top: "-30px", position: "relative"}}>
                                    <p style={{fontSize: "14px", color: "gray"}}>
                                        Chọn <FaRegHandPointUp size={14} /> và đặt (Phí đặt lịch 0đ)
                                    </p>
                                </Col>
                            </Col>

                            <Col span={12} style={{backgroundColor: "white", padding: "45px 20px"}}>
                                <p style={{fontWeight: "500"}}>ĐỊA CHỈ KHÁM</p>
                                <p style={{fontWeight: "500"}}>Phòng khám Cơ xương khớp Bác sĩ Dương Minh Trí</p>
                                <p>182b Lê Văn Sỹ, Phường 10, Quận Phú Nhuận, Thành phố Hồ Chí Minh</p>
                               
                                {showDetails ? (
                                    <div>
                                        <p style={{ fontWeight: "500" }}>GIÁ KHÁM:</p>
                                        <div style={{
                                            backgroundColor: "#f7f7f7", border: "1px solid #d9d2d2",
                                            display: "flex", justifyContent: "space-between"
                                        }}>
                                            <span className='span-gia-kham'>
                                                <p style={{ fontWeight: "500" }}>Giá khám cho người Việt</p>
                                                <p>Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm</p>
                                            </span>
                                            <span style={{ lineHeight: "70px", marginRight: "5px" }} className='span-gia-kham'>
                                                300.000đ
                                            </span>
                                        </div>

                                        <div style={{
                                            backgroundColor: "#f7f7f7", border: "1px solid #d9d2d2",
                                            display: "flex", justifyContent: "space-between"
                                        }}>
                                            <span className='span-gia-kham'>
                                                <p style={{ fontWeight: "500" }}>Giá khám cho người nước ngoài</p>
                                                <p>Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm</p>
                                            </span>
                                            <span style={{ lineHeight: "70px", marginRight: "5px" }} className='span-gia-kham'>
                                                400.000đ
                                            </span>
                                        </div>
                                        <a href="#" onClick={toggleDetails} style={{ float: "right", marginTop: "5px" }}>Ẩn bảng giá</a>
                                    </div>
                                ) : (
                                    <p>
                                        <span style={{ fontWeight: "500", color: "gray" }}>GIÁ KHÁM:</span> 300.000đ - 400.000đ 
                                        <a href='#' onClick={toggleDetails} style={{ marginLeft: "10px" }}>Xem chi tiết</a>
                                    </p>
                                )}                                
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row> 
                    <Col span={24} style={{backgroundColor: "#f7f7f7", borderTop: "1px solid rgba(228, 228, 221, 0.637)", marginTop: "20px"}}>
                        <Row>
                            <Col span={18} style={{margin: "auto",}}>
                            chi tiết ở đây
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row> 
                    <Col span={24} style={{backgroundColor: "#f7f7f7", borderTop: "1px solid rgba(228, 228, 221, 0.637)", marginTop: "20px"}}>
                        <Row>
                            <Col span={18} style={{margin: "auto",}}>
                            phản hồi ở đây
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </div>        
        </>
    )

}
export default PageViewDoctor