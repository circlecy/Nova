import axios from "axios";
import { useEffect, useState } from "react";
//import { useContext } from "react";
//import { Context } from "../../context/Context";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./posts.css";

export default function Posts() {
    const PF = "http://45.80.181.65:5000/images/posts/";
    //const { user } = useContext(Context);
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <div className="posts1">
            <main className="wrapper">
                <section className="page-title text-center">
                    <div className="container">
                        <div className="page-title__holder">
                            <h1 className="page-title__title">Our Update & Events</h1>
                            <p className="page-title__subtitle">Our Teams event and update</p>
                        </div>
                    </div>
                </section>
                {/*<div className="button-margin">
                    {user ? (
                        <Link to={`/write`} className="button">新增動態</Link>
                    ) : (<br />)}
                    </div>*/}
                <section className="posts-list">
                    <ul>
                        {posts.slice().reverse().map((post, i) => (
                            <li key={i}>
                                {post.photo0 && <img className="postImg" src={PF + post.photo0} alt="" />}
                                <div className="postInfo link">
                                    <Link to={`/post/${post._id}`} className="link">
                                        <span className="postTitle">{post.title}</span>
                                    </Link>
                                    <p className="postDesc">{post.desc}</p>
                                    {/*<span className="postDate">
                                    {new Date(post.createdAt).toDateString()}
                                </span>*/}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
