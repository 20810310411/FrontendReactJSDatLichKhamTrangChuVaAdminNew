import { Col, Row } from "antd"

const BodyAdmin = ({ content, pageTitle }) => {
    return (
        <>
            <Row>
                    <Col span={6} offset={5} style={{backgroundColor: "yellow", marginTop: "5vh", textAlign: "start"}}>
                        <p>Page / {pageTitle}</p>
                    </Col>
                    <Col span={6} offset={7} style={{backgroundColor: "greenyellow", marginTop: "5vh"}}>
                        col-6 col-offset-7
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