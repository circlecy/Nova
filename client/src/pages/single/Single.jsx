import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./single.css";

export default function Single() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://45.80.181.65:5000/images/posts/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) { }
  }

  function handleImage(e) {
    document.getElementById("imgid").src = e;
  };

  return (
    <div className="single">
      <div className="singlePost">
        <div className="container grid product">
          <div className="row">
            <div className="column-sm-12 column-md-7 col-lg-7">
              <div className="product-gallery">
                <div className="product-image">
                  {post.photo0 && (
                    <img id="imgid" className="active" src={PF + post.photo0} alt="" />
                  )}

                </div>
                <ul className="image-list">
                  {post.photo1 && (
                    <li className="image-item"><img onClick={(e) => handleImage(e.target.src)} alt="" src={PF + post.photo0} /></li>
                  )}
                  {post.photo1 && (
                    <li className="image-item"><img onClick={(e) => handleImage(e.target.src)} alt="" src={PF + post.photo1} /></li>
                  )}
                  {post.photo2 && (
                    <li className="image-item"><img onClick={(e) => handleImage(e.target.src)} alt="" src={PF + post.photo2} /></li>
                  )}
                </ul>
              </div>
            </div>
            <div className="column-sm-12 column-md-5 col-lg-5">
              {updateMode ? (
                <input
                  type="text"
                  value={title}
                  className="singlePostTitleInput"
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <h1 className="singlePostTitle">
                  {title}
                  {post.username === user?.username && (
                    <div className="singlePostEdit">
                      <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                      <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                  )}
                </h1>
              )}
              <br />
              {/*<span className="singlePostAuthor">
                Author:
                  <b> {post.username}</b>
              </span>
              <br />
              <span className="singlePostDate">
                Date:
                <i> {new Date(post.createdAt).toDateString()} </i>
                  </span>*/}
              {updateMode ? (
                <textarea
                  className="singlePostDescInput"
                  style={{ whiteSpace: "pre-wrap" }}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              ) : (
                <div className="description">
                  <p style={{ whiteSpace: "pre-wrap" }}>{desc}</p>
                </div>
              )}
              <br />
              {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
