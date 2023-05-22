import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {/*{post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <img className="postImg" src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg" alt="" />
        */}
        {post.photo0 && <img className="postImg" src={PF + post.photo0} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
    </div>
  );
}
