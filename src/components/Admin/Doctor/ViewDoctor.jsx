import { Badge, Col, Collapse, Descriptions, Divider, Drawer, Row } from "antd";
import moment from "moment";
import { useState } from "react";
import './css.scss'

const ViewDoctor = (props) => {

    const {
        openViewDoctor, setOpenViewDoctor, dataDetailDoctor, setDataDetailDoctor
    } = props
    const [placement, setPlacement] = useState('right');

    console.log("dataDetailDoctor: ", dataDetailDoctor);
    
    const onClose = () => {
        setOpenViewDoctor(false);
        setDataDetailDoctor(null)
    };

    const style = {
      background: '#d3ffa9',
      padding: '8px',
      textAlign: 'center',
      borderRadius: "8px"
    };

    const items = [
        {
            key: 'image',
            label: 'Hình ảnh',
            children: <img style={{ width: 150, height: 140, objectFit: 'cover', borderRadius: "15%", border: "2px solid green" }}
            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${dataDetailDoctor?.image}`} />,
        },
        {
            key: 'roleId',
            label: 'Quyền truy cập',
            children: <Badge status="processing" text={`${dataDetailDoctor?.roleId.key}`} />,
            span: 2,
        },
        {
            key: 'chucVuId', 
            label: 'Chức vụ',
            children: (
              <>
                  {dataDetailDoctor?.chucVuId.map((value, index) => (
                      <div key={value._id}>
                      {value.name}
                      {index < dataDetailDoctor.chucVuId.length - 1 && <br />} {/* Thêm <br /> nếu không phải là phần tử cuối */}
                      </div>
                  ))}
              </>
            ),
        },
        {
            key: 'chuyenKhoaId', span: 2,
            label: 'Chuyên khoa',
            children: (
                <>
                    {dataDetailDoctor?.chuyenKhoaId.map((value, index) => (
                        <div key={value._id}>
                        {value.name}
                        {index < dataDetailDoctor.chuyenKhoaId.length - 1 && <br />} {/* Thêm <br /> nếu không phải là phần tử cuối */}
                        </div>
                    ))}
                </>
            ),
        },
        
                
        // {
        //   key: '7',
        //   label: 'Negotiated Amount',
        //   children: '$80.00',
        // },
        // {
        //   key: '8',
        //   label: 'Discount',
        //   children: '$20.00',
        // },
        // {
        //   key: '9',
        //   label: 'Official Receipts',
        //   children: '$60.00',
        // },
        {
            key: 'phongKhamId',
            label: 'Phòng khám',
            children: (
              <>
                  {dataDetailDoctor?.phongKhamId.name} 
                  <br/>
                  {dataDetailDoctor?.phongKhamId.address}
              </>
            ),
            span: 3
          },
          {
            key: 'thoiGianKhamId',
            label: 'Lịch trình khám bệnh',
            children: (
              <>
                  {dataDetailDoctor?.thoiGianKham.map((value, index) => (
                        <div key={value._id}>                        
                          <span style={{fontWeight: "bold", fontSize: "18px", color: 'navy'}}>{moment(value.date).format('DD/MM/YYYY')}</span> 
                          <br/><br/>
                          {/* Lặp qua các thoiGianId để hiển thị tên giờ */}
                          <Row gutter={[10,10]}>
                            {value.thoiGianId.map((timeSlot) => (
                              <>
                                <Col className="gutter-row" span={6}>
                                  <div key={timeSlot._id} style={style}>{timeSlot.tenGio}</div>
                                </Col>                                
                              </>
                            ))}
                          </Row>
                          <Divider />                        
                        </div>
                    ))}
              </>
            ),
            span: 3
          },
        {
            key: 'createdAt',
            label: 'Ngày tạo',
            children: (
              <>
                {moment(dataDetailDoctor?.createdAt).format('DD/MM/YYYY')}
                {/* <br /> */} &nbsp; &nbsp;
                {moment(dataDetailDoctor?.createdAt).format('HH:mm:ss')}
              </>
            ),
          },
          {
            key: 'updatedAt',
            label: 'Ngày chỉnh sửa',
            children: (
              <>
                {moment(dataDetailDoctor?.updatedAt).format('DD/MM/YYYY')}
                {/* <br /> */} &nbsp; &nbsp;
                {moment(dataDetailDoctor?.updatedAt).format('HH:mm:ss')}
              </>
            ),
            span: 2,
          },
        
      ];

      const text = `${dataDetailDoctor?.mota}`
    return (
        <Drawer
            title={dataDetailDoctor ? `Thông tin chi tiết của Bác sĩ ${dataDetailDoctor.lastName} ${dataDetailDoctor.firstName}` : "Thông tin bác sĩ"}
            placement={placement}
            width={900}
            onClose={onClose}
            open={openViewDoctor}        
        >
            <Descriptions title="Chi tiết" bordered items={items} />

            <Collapse
                style={{marginTop: "30px"}}
                size="large"
                items={[
                    {
                    key: 'mota',
                    label: 'Xem mô tả chi tiết',
                    children: <div className="truncate"  dangerouslySetInnerHTML={{ __html: text }} />,
                    },
                ]}
            />
        </Drawer>
    )
}

export default ViewDoctor