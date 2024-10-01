import { Drawer } from "antd";
import { useState } from "react";

const ViewDoctor = (props) => {

    const {
        openViewDoctor, setOpenViewDoctor, dataDetailDoctor
    } = props
    const [placement, setPlacement] = useState('right');

    console.log("dataDetailDoctor: ", dataDetailDoctor);
    
    const onClose = () => {
        setOpenViewDoctor(false);
    };

    return (
        <Drawer
            title={dataDetailDoctor ? `Thông tin chi tiết của Bác sĩ ${dataDetailDoctor.lastName} ${dataDetailDoctor.firstName}` : "Thông tin bác sĩ"}
            placement={placement}
            width={500}
            onClose={onClose}
            open={openViewDoctor}        
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

export default ViewDoctor