import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/PreLoader/PreLoader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <PreLoader />;
  }

  return (
    <div>
      {/*<div className={s.mainImage}>
        <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
  </div>*/}
      <div className={s.discription}>
        {" "}
        <img
          alt={""}
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
        />
        {/*<img src={props.profile.photos.large} />*/}
        <ProfileStatusWithHooks
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
