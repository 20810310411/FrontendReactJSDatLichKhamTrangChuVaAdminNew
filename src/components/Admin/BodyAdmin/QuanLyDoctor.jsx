import { Col, Popconfirm, Row, Space, Table, Tag } from "antd"
import BodyAdmin from "./BodyAdmin"
import MenuNav from "../Menu/Menu"
import AdminLayout from "../AdminLayout"
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
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

const QuanLyDoctor = (props) => {

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
            <AdminLayout pageTitle="quản lý bác sĩ">
                {/* Nội dung của BodyAdmin cho quản lý bác sĩ */}
                <h1>Thông tin bác sĩ</h1>
                <Table  dataSource={data} 
                        pagination={false} // Tắt phân trang mặc định của Table
                >
                    <Column title="STT" dataIndex="stt" key="stt" />
                    <Column title="Image" dataIndex="image" key="image" />
                    <Column title="Email" dataIndex="email" key="email" />
                    <ColumnGroup title="Tên đầy đủ">
                        <Column title="Họ" dataIndex="lastName" key="lastName" />
                        <Column title="Tên" dataIndex="firstName" key="firstName" />
                    </ColumnGroup>
                    <Column title="Địa chỉ" dataIndex="address" key="address" />                
                    <Column
                        title="Action"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <EyeOutlined style={{color: "green", fontWeight: "bold", cursor: "pointer"}} 
                                    onClick={() => {
                                        // setOpenDetailBook(true)
                                        // setDataDetailBook(record)
                                    }} 
                                />

                                <EditOutlined style={{color: "orange"}} onClick={() => {
                                    console.log("record update: ", record);
                                    // setOpenUpdateBook(true)
                                    // setDataUpdateBook(record)
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
                
            </AdminLayout>
        </>
    )
}

export default QuanLyDoctor