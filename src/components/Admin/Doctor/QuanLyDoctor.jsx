import { Button, Col, Pagination, Popconfirm, Row, Space, Table, Input } from "antd"
import BodyAdmin from "../BodyAdmin/BodyAdmin"
import MenuNav from "../Menu/Menu"
import AdminLayout from "../AdminLayout"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { fetchAllDoctor } from "../../../services/apiDoctor";
import { IoAddOutline } from "react-icons/io5";
import { FaFileExport } from "react-icons/fa";
import ViewDoctor from "./ViewDoctor";
const { Search } = Input;
const { Column, ColumnGroup } = Table;
const data = [
    {
      stt: '1',
      image: 'image',
      email: 'admin@gmail.com',
      lastName: 'Khắc',
      firstName: 'Tú',
      age: 32,
      address: 'New York No. 1 Lake Park',
    //   tags: ['nice', 'developer'],
    },    
  ];
import './css.scss'
import CreateDoctor from "./CreateDoctor";
import UpdateDoctor from "./UpdateDoctor";

const QuanLyDoctor = (props) => {
    const [loadingTable, setLoadingTable] = useState(false)
    const [dataDoctor, setDataDoctor] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalDoctors, setTotalDoctors] = useState(0);
    const [pageSize, setPageSize] = useState(8);

    const [openViewDoctor, setOpenViewDoctor] = useState(false);
    const [dataDetailDoctor, setDataDetailDoctor] = useState(null);
    const [openCreateDoctor, setOpenCreateDoctor] = useState(false);
    const [dataUpdateDoctor, setDataUpdateDoctor] = useState(null);
    const [openUpdateDoctor, setOpenUpdateDoctor] = useState(false);

    useEffect(() => {
        fetchListDoctor()
    }, [currentPage, pageSize])

    const fetchListDoctor = async () => {
        setLoadingTable(true)
        let query = `page=${currentPage}&limit=${pageSize}`
        const res = await fetchAllDoctor(query)
        console.log("res doctor: ", res);
        if (res && res.data) {
            setDataDoctor(res.data)
            setTotalDoctors(res.totalDoctors); // Lưu tổng số bác sĩ
        }
        setLoadingTable(false)
    }

    const onChangePagination = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize); // Cập nhật pageSize nếu cần
    };

    const cancelXoa = (e) => {
        console.log(e);
        message.error('Huỷ xoá');
    };

    const handleDeleteDoctor = async (id) => {

        // const res = await deleteBookAPI(id)
        // if(res.data){
        //     notification.success({
        //         message: "Xóa sản phẩm book",
        //         description: "Bạn đã xoá thành công"
        //     })
        //     await fetchListBook()
        // } else {
        //     notification.error({
        //         message: "Xoá tài khoản user",
        //         description: JSON.stringify(res.message)
        //     })
        // }
    }

    return (
        <>
            <AdminLayout pageTitle="Quản lý bác sĩ" >

                {/* Nội dung của BodyAdmin cho quản lý bác sĩ */}
                <Row>
                    <Col span={24} style={{padding: "20px", fontSize: "18px"}}>
                        <span>THÔNG TIN BÁC SĨ</span>
                        <Space size={10} style={{ float: "right" }}>
                            <Button 
                            type="primary" 
                            style={{
                                lineHeight: "15px"
                            }}
                            icon={<IoAddOutline size={20} />} 
                            className="custom-row"
                            onClick={() => {
                                setOpenCreateDoctor(true)
                            }}
                            >Thêm bác sĩ</Button>
                            <Button type="primary" icon={<FaFileExport size={15} />} className="custom-row">Export</Button>
                        </Space>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={12} md={24} span={24}>
                        <Table  dataSource={dataDoctor} 
                                loading={loadingTable}
                                pagination={false} // Tắt phân trang mặc định của Table
                                scroll={{ x: 'max-content' }}
                                rowClassName="custom-row" // Thêm lớp cho hàng    
                                headerClassName="custom-header" // Lớp cho tiêu đề                            
                        >
                            <Column title={<p className="title-col-style">STT</p>}
                            dataIndex="stt" 
                            key="stt" 
                            render={(_, record, index) => {
                                //   console.log("index: ", index+1);
                                  return (
                                    <>
                                      {(index+1) + (currentPage - 1) * pageSize}
                                    </>
                                  )
                                }
                            }/>
                            <Column
                                title={<p className="title-col-style">Image</p>}
                                dataIndex="image"
                                key="image"
                                render={(text) => {
                                    const imageUrl = `${import.meta.env.VITE_BACKEND_URL}/uploads/${text}`;
                                    console.log("Image URL:", imageUrl); // In ra URL để kiểm tra
                                    return (
                                        <img
                                            src={imageUrl}
                                            alt={`doctor ${text}`}
                                            style={{ width: 70, height: 70, objectFit: 'cover', borderRadius: "50%", border: "1px solid navy" }}
                                        />
                                    );
                                }}
                            />                    
                            <Column title={<p className="title-col-style">Email</p>} dataIndex="email" key="email" />
                            <ColumnGroup title={<p className="title-col-style">Họ và Tên</p>}>
                                <Column title={<p className="title-col-style">Họ</p>} dataIndex="lastName" key="lastName" />
                                <Column title={<p className="title-col-style">Tên</p>} dataIndex="firstName" key="firstName" />
                            </ColumnGroup>
                            <Column title={<p className="title-col-style">Địa chỉ</p>} dataIndex="address" key="address" width={200}  />                
                            <Column
                                title={<p className="title-col-style">Chức năng</p>}
                                key="action"
                                render={(_, record) => (
                                    <Space size="middle">
                                        <EyeOutlined style={{color: "green", fontWeight: "bold", cursor: "pointer"}} 
                                            onClick={() => {
                                                console.log("record: ", record);                                                
                                                setOpenViewDoctor(true)
                                                setDataDetailDoctor(record)
                                            }} 
                                        />

                                        <EditOutlined style={{color: "orange"}} onClick={() => {
                                            console.log("record update: ", record);
                                            setOpenUpdateDoctor(true)
                                            setDataUpdateDoctor(record)
                                        }} /> 

                                        <Popconfirm
                                            title="Xoá book"
                                            description="Bạn có chắc chắn muốn xoá?"
                                            onConfirm={() => handleDeleteDoctor(record._id)}
                                            onCancel={cancelXoa}
                                            okText="Xác nhận xoá"
                                            cancelText="Không Xoá"
                                        >
                                            <DeleteOutlined style={{color: "red"}} />
                                        </Popconfirm>
                                    </Space>
                                )}
                            />
                        </Table>

                        <Pagination 
                            style={{
                                fontSize: "17px",
                                display: "flex",
                                justifyContent: "center",
                                margin: "10px 0 20px 0"
                            }}
                            current={currentPage}
                            pageSize={pageSize}
                            total={totalDoctors}
                            onChange={(page, pageSize) => onChangePagination(page, pageSize)}  // Gọi hàm onChangePagination khi thay đổi trang
                            showSizeChanger={true}
                            showQuickJumper={true}
                            showTotal={(total, range) => (
                                <div>{range[0]}-{range[1]} trên {total} tài khoản</div>
                            )}
                            locale={{
                                items_per_page: 'dòng / trang',  // Điều chỉnh "items per page"
                                jump_to: 'Đến trang số',  // Điều chỉnh "Go to"
                                jump_to_confirm: 'Xác nhận',  // Điều chỉnh "Go"
                                page: '',  // Bỏ hoặc thay đổi chữ "Page" nếu cần
                            }}
                        />     

                        <ViewDoctor 
                        openViewDoctor={openViewDoctor}
                        setOpenViewDoctor={setOpenViewDoctor}
                        dataDetailDoctor={dataDetailDoctor}

                        />       

                        <CreateDoctor
                            openCreateDoctor={openCreateDoctor}
                            setOpenCreateDoctor={setOpenCreateDoctor}
                            fetchListDoctor={fetchListDoctor}
                        />    

                        <UpdateDoctor 
                            dataUpdateDoctor={dataUpdateDoctor}
                            setDataUpdateDoctor={setDataUpdateDoctor}
                            openUpdateDoctor={openUpdateDoctor}
                            setOpenUpdateDoctor={setOpenUpdateDoctor}
                            fetchListDoctor={fetchListDoctor}
                        />
                    </Col>
                </Row>
                
            </AdminLayout>
        </>
    )
}

export default QuanLyDoctor