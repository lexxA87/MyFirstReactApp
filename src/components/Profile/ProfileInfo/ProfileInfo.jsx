import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/PreLoader/PreLoader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />;
  }

  return (
    <div>
      <div className={s.mainImage}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div className={s.discription}>
        {" "}
        <img src={props.profile.photos.large} />
        ava + discription
      </div>
    </div>
  );
};

export default ProfileInfo;
