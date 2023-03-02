import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {

  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>akshat chaudhari</b> and <b>3 other friends </b>have brthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };


  const ProfileRightbar=()=>{
    return (
      <>
        <h4 className="rightbarTitle">User Information title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue"> New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue"> Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue"> Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFolllowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFolllowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFolllowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFolllowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFolllowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFolllowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  );
}
