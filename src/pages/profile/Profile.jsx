import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/topbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {

  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser]=useState({});


  useEffect(() => {
    const fetchUser = async () => {
      console.log("-------------------------------------------")
      const res = await axios.get('/users?username=swapnil');
      console.log(res.data)
      setUser(res.data);
    };
    fetchUser();
  }, []);



  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">

            <img src={`${PF}post/3.jpeg`} className="profileCoverImg" alt="" />
            <img src={`${PF}person/7.jpeg`}  className="profileUserImg" alt="" />
            </div>
            <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="swapnil"/>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
