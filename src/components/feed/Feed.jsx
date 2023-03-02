import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
// import { Posts } from "../../dummyData"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get("posts/profile/"+username)
        : await axios.get("posts/timeline/63fca58ffe00961974157bb0");
      setPosts(res.data);
    };
    fetchPost();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
