import { Col, Divider, Drawer, Input, Row } from 'antd'
import './HeaderViewDoctor.scss'
import { IoMdMenu } from 'react-icons/io'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxTimer } from 'react-icons/rx';


const HeaderViewDoctor = () => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const [activeTxtMenu, setActiveTxtMenu] = useState('');

    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

    const handleClick = (section) => {
        setActiveTxtMenu(section);
        navigate(`${section}`);
    };

    return (
        <>
            <div className='header-top'>
            <Row style={{
                justifyContent: "center", 
                alignItems: "center", 
                height: '100%',
                textAlign: "center",
                display: "inline-flex",
                width: "80%",
                backgroundColor: "rgb(226, 250, 242)"
            }}>
                <Col md={6} sm={20} className='col-top'>                
                    <IoMdMenu style={{fontSize: "6vh", cursor: "pointer"}} onClick={() => showDrawer()} />
                    <img style={{cursor: "pointer", height: "5vh"}} onClick={() => navigate("/")} src="../../../../public/Remove-bg.ai_1726163241481.png" alt="" />
                </Col>

                <Col md={13} sm={24} xs={24} className='col-top'>                                    
                    <Navbar className="navbar-custom" style={{textAlign: "start"}}>
                        <Container>
                            <Nav className="me-auto nav-links">
                                <Nav.Link onClick={() => navigate("/")} style={{textAlign: "start", lineHeight: "10px"}}>
                                    <p style={{fontSize: "16px", fontWeight: "bold"}}>Chuyên khoa</p>
                                    <p style={{fontSize: "13px"}}>Tìm bác sĩ theo chuyên khoa</p>
                                </Nav.Link>
                                <Nav.Link onClick={() => navigate("/")} style={{textAlign: "start", lineHeight: "10px"}}>
                                    <p style={{fontSize: "16px", fontWeight: "bold"}}>Cơ sở y tế</p>
                                    <p style={{fontSize: "13px"}}>Chọn bệnh viện phòng khám</p>
                                </Nav.Link>
                                <Nav.Link onClick={() => navigate("/")} style={{textAlign: "start", lineHeight: "10px"}}>
                                    <p style={{fontSize: "16px", fontWeight: "bold"}}>Bác sĩ</p>
                                    <p style={{fontSize: "13px"}}>Chọn bác sĩ giỏi</p>
                                </Nav.Link>
                                <Nav.Link onClick={() => navigate("/")} style={{textAlign: "start", lineHeight: "10px"}}>
                                    <p style={{fontSize: "16px", fontWeight: "bold"}}>Gói khám</p>
                                    <p style={{fontSize: "13px"}}>Khám sức khỏe tổng quát</p>
                                </Nav.Link>                                
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>                

                <Col md={5} sm={0} xs={0} className='col-top icon-container' style={{position: "relative", right: "-10vh"}}> 
                    <div style={{ cursor: "pointer", color: "rgb(69, 195, 210)",  }}>
                        <RxTimer size={"5vh"} title='Lịch hẹn' />
                    </div>                
                </Col>
            </Row>

            <Drawer
                title="MENU"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <p className={`txt-menu ${activeTxtMenu === '/' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("/")}>Trang chủ</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#camnang' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#camnang")}>Cẩm nang</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#lien-he' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#lien-he")}>Liên hệ hợp tác</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#suc-khoe' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#suc-khoe")}>Sức khỏe doanh nghiệp</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#lien-he2' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#lien-he2")}>Gói chuyển đổi số doanh nghiệp</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#lien-he3' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#lien-he3")}>Tuyển dụng</p>
                <Divider/>
                <p style={{ margin: "-20px 0 20px"}}>VỀ BOOKINGCARE</p>
                <p className={`txt-menu ${activeTxtMenu === '#lien-he4' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#lien-he4")}>Dành cho bệnh nhân</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#lien-he5' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#lien-he5")}>Dành cho bác sĩ</p>
                <Divider/>
                <p className={`txt-menu ${activeTxtMenu === '#lien-he6' ? 'active-txt-menu' : ''}`} onClick={() => handleClick("#lien-he6")}>Vai trò của BookingCare</p>
                <Divider/>
            </Drawer>
            </div>
        </>
    )
}

export default HeaderViewDoctor