import { Typography } from "antd";

function AppFooter (){
    return<div className="appFooter">
        <Typography.Link href="https://www.google.com" target={'_blank'}>policy</Typography.Link>
        <Typography.Link href="https://www.instagram.com/_iamsundar_/" target={'_blank'}>Contact us</Typography.Link>
        <Typography.Link href="tel:+91 8870136394" target={'_blank'}>+91 887013
        6394</Typography.Link>
        <Typography.Link href="https://www.google.com/maps/place/Sedin+Technologies+Private+Limited+-+DevCenter/@13.0365387,80.2155301,626m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5266da80830731:0x52e1e825d8b8522f!8m2!3d13.0365387!4d80.2155301!16s%2Fg%2F11tcfg74nl?entry=ttu" target={'_blank'}>Location</Typography.Link>    
    </div>
    
    }
    export default AppFooter;