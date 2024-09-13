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
                width: "80%",
                backgroundColor: "rgb(226, 250, 242)"
            }}>
                <Col md={6} sm={10} className='col-top'>                
                    <IoMdMenu style={{fontSize: "50px", cursor: "pointer"}} onClick={() => showDrawer()} />
                    <img style={{cursor: "pointer"}} onClick={() => navigate("/")} height={40} src="../../../../public/Remove-bg.ai_1726163241481.png" alt="" />
                </Col>

                <Col md={11} sm={24} xs={24} className='col-top'>                                    
                    <Navbar  className="navbar-custom">
                        <Container>
                            <Nav className="me-auto">
                                <Nav.Link href="/" className={getActiveLinkClass('/')}>Tất cả</Nav.Link>
                                <Nav.Link href="#features" className={getActiveLinkClass('features')}>Tại nhà</Nav.Link>
                                <Nav.Link href="#pricing" className={getActiveLinkClass('/pricing')}>Tại viện</Nav.Link>
                                <Nav.Link href="#Sống" className={getActiveLinkClass('/Sống')}>Sống khỏe</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>

                <Col md={4} sm={18} xs={24} className='col-top'> 
                    <Input 
                    style={{
                        borderRadius: "50px",
                        height: "50px",
                    }}
                    size="large" 
                    placeholder="Tìm kiếm đi cậu..." 
                    prefix={<SearchOutlined />} />                
                </Col>

                <Col md={3} sm={6} xs={0} className='col-top'> 
                    <FaRegHandshake size={35} title='Hợp tác' style={{cursor: "pointer"}} /> 
                    <GiTimeBomb size={35} title='Lịch hẹn' style={{marginLeft: "30px", cursor: "pointer"}} /> 
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