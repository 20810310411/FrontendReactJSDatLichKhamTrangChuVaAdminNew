import MenuNav from "./Menu/Menu";
import BodyAdmin from "./BodyAdmin/BodyAdmin";


const AdminLayout = ({ children, pageTitle, setFirstName, setLastName, placeholder, setAddress  }) => {
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
                setFirstName={setFirstName}
                setLastName={setLastName}
                setAddress={setAddress}
                placeholder={placeholder}
            /> {/* Truyền nội dung vào BodyAdmin */}
        </div>
    );
};

export default AdminLayout;
