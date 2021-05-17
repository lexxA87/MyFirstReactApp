import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/PreLoader/PreLoader";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader/>;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
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
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
