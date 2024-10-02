import MenuNav from "./Menu/Menu";
import BodyAdmin from "./BodyAdmin/BodyAdmin";


const AdminLayout = ({ children, pageTitle, setFirstName, setLastName  }) => {
    return (
        <div style={{ height: 250, 
            // textAlign: 'center', 
            // borderBottom: "1px solid #ebebeb", 
            backgroundColor: "#baf3d6",
            marginTop: 0, padding: 0, 
        }}>
            <MenuNav />
            <div style={{ marginLeft: '20px', flex: 1 }}>
                <BodyAdmin 
                    content={children} 
                    pageTitle={pageTitle } 
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                /> {/* Truyền nội dung vào BodyAdmin */}
            </div>
        </div>
    );
};

export default AdminLayout;
