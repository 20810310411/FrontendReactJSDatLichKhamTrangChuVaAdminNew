// import '../../../pages/TrangChu/BodyHomePage/bodyHomePage.scss'

const HinhTron = (props) => {

    const {src, txtP} = props

    return (
        <>
            <div className="htron">
                <img className="htron" src={src} alt="" />
            </div>
            <p style={{fontSize: "3vh", fontWeight: "500"}}>{txtP}</p>
        </>
    )
}
export default HinhTron