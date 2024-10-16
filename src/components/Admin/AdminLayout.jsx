import MenuNav from "./Menu/Menu";
import BodyAdmin from "./BodyAdmin/BodyAdmin";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const AdminLayout = ({ children, pageTitle, placeholder,
                setFirstName, setLastName, setAddress, 
                setTenChucVu,
                setTenPK, setAddressPK,
                setTenCK
            
            }) => {

    const mode = useSelector(state => state.app.mode)
    const dispatch = useDispatch()
    console.log("mode: ", mode);    
    useEffect(() => {
        const body = document.querySelector("body");
        if (body) body.setAttribute('data-bs-theme', mode);
    },[mode])

    return (
        <Navbar className="bg-body-tertiary" data-bs-theme={mode}>
            <Container>

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
                        setTenCK={setTenCK || (() => {})}
                        placeholder={placeholder}
                    /> {/* Truyền nội dung vào BodyAdmin */}
                </div>
            </Container>
        </Navbar>
    );
};

export default AdminLayout;
