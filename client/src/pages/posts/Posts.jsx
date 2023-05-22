import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./posts.css";

export default function Posts() {
    const PF = "http://localhost:5000/images/";
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <div className="posts1">
            <main className="wrapper">
                <section className="page-title bg-dark-overlay text-center">
                    <div className="container">
                        <div className="page-title__holder">
                            <h1 className="page-title__title">Our Update & Events</h1>
                            <p className="page-title__subtitle">Our Teams event and update</p>
                        </div>
                    </div>
                </section>
                <section className="posts-list">
                    <ul>
                        {posts.map((post,i) => (
                            <li key={i}>
                                {post.photo0 && <img className="postImg" src={PF + post.photo0} alt="" />}
                                <div className="postInfo link">
                                    <Link to={`/post/${post._id}`} className="link">
                                        <span className="postTitle">{post.title}</span>
                                    </Link>
                                </div>
                                <p className="postDesc">{post.desc}</p>
                                <span className="postDate">
                                    {new Date(post.createdAt).toDateString()}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
