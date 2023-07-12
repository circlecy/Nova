import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./news.css";

export default function News() {
    const PF = "http://45.80.181.65:5000/images/posts";
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
                        <span><b>Event</b></span>
                        <img alt="" src={require('../../assets/img/title2.svg').default} />
                    </div>
                    <div className="title-box">
                        <h2><b>最新活動</b></h2>
                        <div className="text">令成員愉快地工作並實現個人目標是Nova的宗旨，透過公司的支援例如遙距投保服務，以及團隊上下的齊心協力，並不時舉辦的培訓課程和團隊凝聚活動，令成員在任何時刻仍能保持動力。</div>
                    </div>
                </div>
                <div className="row">
                    <div className="posts">
                        {posts.slice().reverse().map((post, i) => (
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