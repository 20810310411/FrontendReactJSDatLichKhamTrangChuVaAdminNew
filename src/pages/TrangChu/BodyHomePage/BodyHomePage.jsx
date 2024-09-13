import { Col, Divider, Row } from "antd"
import './bodyHomePage.scss'
import HinhTron from "../../../components/TrangChu/HinhTron/HinhTron"
import HinhChuNhat from "../../../components/TrangChu/HinhChuNhat/HinhChuNhat";
import HinhVuong from "../../../components/TrangChu/HinhVuong/Slider";



const BodyHomePage = () => {

    // Mảng chứa các giá trị src và txtP
    const items = [
        {
            key: '0',
            src: 'https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png',
            txtP: 'Bác sĩ'
        },
        {
            key: '1',
            src: 'https://cdn.bookingcare.vn/fo/w384/2023/11/01/140537-chuyen-khoa.png',
            txtP: 'Chuyên khoa'
        }
        // Thêm các đối tượng khác nếu cần
    ];

    const items_toandien = [
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161905-iconkham-chuyen-khoa.png&w=128&q=75',
            txtP: 'Khám chuyên khoa'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161817-iconkham-tu-xa.png&w=128&q=75',
            txtP: 'Khám từ xa'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161350-iconkham-tong-quan.png&w=128&q=75',
            txtP: 'Khám tổng quát'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161340-iconxet-nghiem-y-hoc.png&w=128&q=75',
            txtP: 'Xét nghiệm y học'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161403-iconsuc-khoe-tinh-than.png&w=128&q=75',
            txtP: 'Sức khỏe tinh thần'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161410-iconkham-nha-khoa.png&w=128&q=75',
            txtP: 'Khám nha khoa'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161421-icongoi-phau-thuat.png&w=128&q=75',
            txtP: 'Gói phẫu thuật'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F09%2F20%2F145257-thiet-ke-chua-co-ten-3.png&w=128&q=75',
            txtP: 'Sống khỏe Tiểu đường'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F06%2F07%2F161442-iconbai-test-suc-khoe2.png&w=128&q=75',
            txtP: 'Bài Test Sức khỏe'
        },
        {
            src: 'https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F07%2F06%2F163421-153524-near-home-01.png&w=128&q=75',
            txtP: 'Y tế gần bạn'
        },
    ];

    const items_ChuyenKhoa = [
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101655-nhi-khoa.png',
            txtP: 'Nhi khoa'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101638-da-lieu.png',
            txtP: 'Da liễu'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101739-viem-gan.png',
            txtP: 'Bệnh viêm gan'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-suc-khoe-tam-than.png',
            txtP: 'Sức khỏe tâm thần'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101655-nhi-khoa.png',
            txtP: 'Nhi khoa'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101638-da-lieu.png',
            txtP: 'Da liễu'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101739-viem-gan.png',
            txtP: 'Bệnh viêm gan'
        },
        {
            src: 'https://cdn.bookingcare.vn/fo/w640/2023/12/26/101713-suc-khoe-tam-than.png',
            txtP: 'Sức khỏe tâm thần'
        },
    ];


    return (
        <>
            <Row className="body-top"></Row>

            <div className="danh-cho-ban">                
                <Row  className="ben-trong">
                    <span style={{fontWeight: "500", fontSize: "4vh", width: "100%", padding: "4vh 0"}}>Dành cho bạn</span>                    
                    {items.map((item, index) => (
                        <Col key={index} md={6} sm={10} xs={24} className="cot-ben-trong">
                            <HinhTron src={item.src} txtP={item.txtP} />
                        </Col>
                    ))}                 
                </Row>                                        
            </div>

            <div className="danh-cho-ban">                
                <Row className="ben-trong" >
                    <span style={{fontWeight: "500", fontSize: "4vh", width: "100%", padding: "4vh 0"}}>Dịch vụ toàn diện</span>                    
                    {items_toandien.map((item, index) => (
                        <Col key={index} md={12} sm={24} xs={24} style={{marginBottom: "5vh"}}>
                            <HinhChuNhat src={item.src} txtP={item.txtP}/>
                        </Col>
                    ))}               
                </Row>                        
            </div>

            <div className="danh-cho-ban">                
                <Row  className="ben-trong" >
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <span style={{fontWeight: "500", fontSize: "4vh", padding: "4vh 0"}}>Chuyên khoa</span>                    
                        <span style={{
                            fontWeight: "500", 
                            fontSize: "3vh", 
                            backgroundColor: "blue", 
                            height: "50px", 
                            lineHeight: "45px",
                            borderRadius: "15px",
                            textAlign: "center",
                            backgroundColor: "#d0edf7",
                            color: "rgb(45 145 179)",
                            marginTop: "10px",
                            padding: "3px 10px"}}
                        >Xem thêm</span>    
                    </div>                     
                    <HinhVuong items={items_ChuyenKhoa} />                     
                </Row>                        
            </div>

            <div className="danh-cho-ban" style={{marginTop: "30px"}}>                
                <Row  className="ben-trong" >
                    <div style={{display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <span style={{fontWeight: "500", fontSize: "4vh", padding: "4vh 0"}}>Chuyên khoa</span>                    
                        <span style={{
                            fontWeight: "500", 
                            fontSize: "3vh", 
                            backgroundColor: "blue", 
                            height: "50px", 
                            lineHeight: "45px",
                            borderRadius: "15px",
                            textAlign: "center",
                            backgroundColor: "#d0edf7",
                            color: "rgb(45 145 179)",
                            marginTop: "10px",
                            padding: "3px 10px"}}
                        >Xem thêm</span>    
                    </div> 
                                     
                </Row>                        
            </div>
        </>
    )
}
export default BodyHomePage