import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) =>{
    return(
        <div>
            <div className={s.mainImage}>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
                
            </div>
            <div className={s.discription}>ava + discription</div>
        </div>
    );
}

export default ProfileInfo;