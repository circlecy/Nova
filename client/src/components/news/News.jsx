import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./news.css";

export default function News() {
    const PF = "http://45.80.181.65:5000/images/";
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
        <div className="news">
            <div className="newsTopRight"></div>
            <div className="newsTopLeft"></div>
            <div className="container">
                <div className="newsTitle">
                    <div className="subtitle">
                        <img alt="" src={require('../../assets/img/title1.svg').default} />
                        <span>Our Updates</span>
                        <img alt="" src={require('../../assets/img/title2.svg').default} />
                    </div>
                    <div className="title-box">
                        <h2>Our Posts & Update</h2>
                        <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                    </div>
                </div>
                <div className="row">
                    <div className="posts">
                        {posts.map((post, i) => (
                            i <= 6
                                ? (<div key={i} className="col-xs-4 col-md-4">
                                    {post.photo0 && <img alt="" className="postImg" src={PF + post.photo0} />}
                                    <div className="postInfo">
                                        <Link to={`/post/${post._id}`} className="link">
                                            <span className="postTitle">{post.title}</span>
                                        </Link>
                                        <span className="postDate">
                                            {new Date(post.createdAt).toDateString()}
                                        </span>
                                    </div>
                                    <p className="postDesc">{post.desc}</p>
                                </div>)
                                : null
                        ))}
                    </div>
                </div>
            </div>
            <div className="newsBottomRight"></div>
            <div className="newsBottomLeft"></div>
        </div>
    );
}