import { Col, Row, Input, Drawer, Divider } from 'antd'
import '../Header/header.scss'
import { IoMdMenu } from 'react-icons/io'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SearchOutlined } from '@ant-design/icons'
import { FaRegHandshake } from 'react-icons/fa'
import { GiTimeBomb } from 'react-icons/gi'
import { RxTimer } from 'react-icons/rx'
import { PiHandshakeBold } from 'react-icons/pi'
const Header = () => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const [activeTxtMenu, setActiveTxtMenu] = useState('');

    const handleClick = (section) => {
        setActiveTxtMenu(section);
        navigate(`${section}`);
    };

    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    const getActiveLinkClass = (linkPath) => {
        if (linkPath === '/') {
            return location.pathname === linkPath ? 'active' : '';
        }
        return location.hash === linkPath ? 'active' : '';
    };

    return (
        <div className='header-top'>
            <Row style={{
                justifyContent: "center", 
                alignItems: "center", 
                height: '100%',
                textAlign: "center",
                display: "inline-flex",
                width: "85%",
                backgroundColor: "rgb(226, 250, 242)"
            }}>
                <Col md={6} sm={20} className='col-top'>                
                    <IoMdMenu style={{fontSize: "6vh", cursor: "pointer"}} onClick={() => showDrawer()} />
                    <img style={{cursor: "pointer", height: "5vh"}} onClick={() => navigate("/")} src="../../../../public/Remove-bg.ai_1726163241481.png" alt="" />
                </Col>

                <Col md={11} sm={24} xs={24} className='col-top'>                                    
                    <Navbar  className="navbar-custom">
                        <Container>
                            <Nav className="me-auto nav-links">
                                <Nav.Link href="/" className={getActiveLinkClass('/')}>Tất cả</Nav.Link>
                                <Nav.Link href="#features" className={getActiveLinkClass('features')}>Tại nhà</Nav.Link>
                                <Nav.Link href="#pricing" className={getActiveLinkClass('/pricing')}>Tại viện</Nav.Link>
                                <Nav.Link href="#Sống" className={getActiveLinkClass('/Sống')}>Sống khỏe</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>

                <Col md={4} sm={24} xs={24} className='col-top icon-container'> 
                    <div className="icon-wrapper">
                        <Input 
                        style={{
                            borderRadius: "5vh",
                            height: "8vh",
                            fontSize: "2vh",
                        }}
                        size="large" 
                        placeholder="Tìm kiếm đi cậu..." 
                        prefix={<SearchOutlined />} />
                    </div>                                    
                </Col>

                <Col md={3} sm={0} xs={0} className='col-top icon-container'> 
                    <PiHandshakeBold size={"5vh"} title='Hợp tác' style={{cursor: "pointer", color: "rgb(69, 195, 210)"}} /> 
                    <RxTimer size={"5vh"} title='Lịch hẹn' style={{marginLeft: "5vh", cursor: "pointer", color: "rgb(69, 195, 210)"}} /> 
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
    )
}
export default Header