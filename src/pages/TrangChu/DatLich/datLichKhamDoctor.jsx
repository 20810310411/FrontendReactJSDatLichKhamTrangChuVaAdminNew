import { Avatar, Col, Row } from "antd"
import Footer from "../../../components/TrangChu/Footer/Footer"
import HeaderViewDoctor from "../../../components/TrangChu/Header/HeaderViewDoctor"
import { UserOutlined } from "@ant-design/icons"
import './styleDatLich.scss'
import { BsFillCalendar2DateFill } from "react-icons/bs"
import { FaRegHospital } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { fetchDoctorByNgayGio } from "../../../services/apiDoctor"
import moment from "moment"
const PageDatLichKham = () => {

    const location = useLocation(); // Lấy location
    const queryParams = new URLSearchParams(location.search);
    const doctorId = queryParams.get('id');
    const idGioKhamBenh = queryParams.get('idGioKhamBenh');
    const ngayKham = queryParams.get('ngayKham');
    
    const [infoDoctorr, setInfoDoctorr] = useState(null)
    const [tenGio, setTenGio] = useState(null)
    const [ngayKhamBenh, setNgayKhamBenh] = useState(null)

    console.log("doctorId: ", doctorId);
    console.log("idGioKhamBenh: ", idGioKhamBenh);
    console.log("ngayKham: ", ngayKham);

    useEffect(() => {
        const fetchInfoDoctor = async () => {
            if (doctorId && idGioKhamBenh && ngayKham) {
                // const res = await fetchDoctorByNgayGio(doctorId, idGioKhamBenh, ngayKham);
                const res = await fetchDoctorByNgayGio(location.search);
                console.log("res:", res);                
                if (res && res.infoDoctor) {
                    setInfoDoctorr(res.infoDoctor);
                    setTenGio(res.tenGio);
                    setNgayKhamBenh(res.ngayKham);
                }
            }                  
        }
        fetchInfoDoctor();
    }, [doctorId, idGioKhamBenh, ngayKham])
    

    console.log("infoDoctorr: ", infoDoctorr);
    console.log("tenGio: ", tenGio);
    console.log("ngayKhamBenh: ", ngayKhamBenh);

    const englishToVietnameseDays = {
        'Sunday': 'Chủ nhật',
        'Monday': 'Thứ 2',
        'Tuesday': 'Thứ 3',
        'Wednesday': 'Thứ 4',
        'Thursday': 'Thứ 5',
        'Friday': 'Thứ 6',
        'Saturday': 'Thứ 7'
    };

    const formatDate = (dateString) => {
        const date = moment(dateString);
        const englishDay = date.format('dddd'); // Lấy tên ngày bằng tiếng Anh
        const vietnameseDay = englishToVietnameseDays[englishDay]; // Chuyển sang tiếng Việt
        return `${vietnameseDay} - ${date.format('DD/MM/YYYY')}`;
    }

    return (
        <>
            <HeaderViewDoctor />
                <Row> 
                    <Col className="sticky-col" span={24}>
                        <Row>
                            <Col span={10} style={{margin: "auto", }}>
                                <Row>
                                    <Col md={4} span={4} style={{ textAlign: "center", top: "20px"}}>
                                        <Avatar  src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${infoDoctorr?.image}`} size={90} icon={<UserOutlined />} />    
                                    </Col>
                                    <Col span={20}>
                                        <p className="txtTile">ĐẶT LỊCH KHÁM</p>
                                        <p className="txtTile" style={{color: "#337ab7"}}>
                                        {infoDoctorr ? infoDoctorr.chucVuId.map(item => item?.name).join(', ') : ''} - &nbsp;
                                        {infoDoctorr?.lastName} {infoDoctorr?.firstName}
                                        </p>
                                        <p className="txtTile">
                                            <BsFillCalendar2DateFill style={{color: "gray", marginRight: "10px"}} />
                                            <span className="txt2" style={{color: "#FEC206"}}> 
                                                {tenGio?.tenGio} - {formatDate(ngayKhamBenh)}
                                            </span>
                                        </p>
                                        <p className="txtTile">
                                            <FaRegHospital style={{color: "gray", marginRight: "10px"}} />
                                            <span>Phòng khám {infoDoctorr?.phongKhamId.name}</span>
                                            <p style={{marginLeft: "25px", fontWeight: "350"}}>{infoDoctorr?.phongKhamId.address}</p>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24} style={{marginTop: "10px"}}>
                        <Row>
                            <Col span={10} style={{margin: "auto", }}>

                            </Col>
                        </Row>                    
                    </Col>
                </Row>                 
            <Footer />
        </>
    )
}

export default PageDatLichKham