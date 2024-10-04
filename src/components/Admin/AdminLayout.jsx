import MenuNav from "./Menu/Menu";
import BodyAdmin from "./BodyAdmin/BodyAdmin";


const AdminLayout = ({ children, pageTitle, placeholder,
                setFirstName, setLastName, setAddress, 
                setTenChucVu,
                setTenPK, setAddressPK
            
            }) => {
    return (
        <div style={{ height: 250, 
            // textAlign: 'center', 
            // borderBottom: "1px solid #ebebeb", 
            backgroundColor: "#baf3d6",
            marginTop: 0, padding: 0, 
        }}>
            <MenuNav />
            <BodyAdmin 
                content={children} 
                pageTitle={pageTitle } 
                setFirstName={setFirstName || (() => {})} // Cung cấp giá trị mặc định
                setLastName={setLastName || (() => {})}
                setAddress={setAddress || (() => {})}
                setTenChucVu={setTenChucVu || (() => {})}
                setTenPK={setTenPK || (() => {})}
                setAddressPK={setAddressPK || (() => {})}
                placeholder={placeholder}
            /> {/* Truyền nội dung vào BodyAdmin */}
        </div>
    );
};

export default AdminLayout;
