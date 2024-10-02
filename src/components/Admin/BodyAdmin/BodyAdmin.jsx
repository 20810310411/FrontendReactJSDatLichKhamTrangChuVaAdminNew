import { Col, Row } from "antd"
import { Input, Space } from 'antd';
import SearchComponent from "./SearchComponent";
const { Search } = Input;
const BodyAdmin = ({ content, pageTitle, setFirstName, setLastName }) => {

    const onSearch = (value) => {
        // Tách giá trị tìm kiếm thành firstName và lastName nếu cần
        const [firstName, lastName] = value.split(' ');
        setFirstName(firstName || '');
        setLastName(lastName || '');
    };

    return (
        <>
            <Row>
                    <Col span={6} offset={5} style={{ marginTop: "5vh", textAlign: "start"}}>
                        <p style={{fontSize: "18px"}}>Home / {pageTitle}</p>
                    </Col>
                    <Col span={5} offset={7} style={{ marginTop: "8vh"}}>
                        {/* <Search placeholder="Tìm kiếm ở đây..." onSearch={onSearch} enterButton /> */}
                        <SearchComponent onSearch={onSearch} /> {/* Sử dụng component tìm kiếm */}
                    </Col>
                </Row>

                <Row>
                    <Col xs={18} md={18} span={18} offset={5} style={{
                        backgroundColor: "white",
                        marginTop: "50px",
                        marginBottom: "50px",
                        borderRadius: "15px", 
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Thêm viền mờ
                        backdropFilter: "blur(10px)", // Thêm hiệu ứng mờ
                        // height: 500
                        
                    }}>
                    {content} {/* Hiển thị nội dung từ props */}
                    </Col>
                </Row>
        </>
    )
}

export default BodyAdmin