import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./photo.css";

export default function Photo() {
    const PF = "http://45.80.181.65:5000/images/album/";
    const [albums, setAlbums] = useState([]);
    const { search } = useLocation();
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });

    useEffect(() => {
        const fetchAlbums = async () => {
            const res = await axiosInstance.get("/albums" + search);
            setPosts(res.data);
        };
        fetchAlbums();
    }, [search]);
    return (
        <div className="gallery">
            <div className="galleryTopRight"></div>
            <div className="galleryTopLeft"></div>
            <div className="container">
                <div className="galleryTitle">
                    <div className="subtitle">
                        <img alt="" src={require('../../assets/img/title1.svg').default} />
                        <span>Event</span>
                        <img alt="" src={require('../../assets/img/title2.svg').default} />
                    </div>
                    <div className="title-box">
                        <h2><b>活動相簿</b></h2>
                        <div className="text">令成員愉快地工作並實現個人目標是Nova的宗旨，公司不時舉辦的培訓課程和團隊凝聚活動，令成員在任何時刻仍能保持動力。</div>
                    </div>
                </div>
                <div className="row">
                    <div className="posts">
                        {albums.map((album, i) => (
                            i < 6
                                ? (<div key={i} className="col-xs-4 col-md-4">
                                    {<img alt="" className="postImg" src={album.photos.length > 0 ? PF + album.album + "/" + album.photos[0].name : require('../../assets/img/Nova-Banner.jpg')} />}
                                    <div className="postInfo">
                                        <Link to={`/album/${album.album}`} className="link">
                                            <span className="postTitle">{album.album}</span>
                                        </Link>
                                    </div>
                                </div>)
                                : null
                        ))}
                    </div>
                </div>
            </div>
            <div className="galleryBottomRight"></div>
            <div className="galleryBottomLeft"></div>
        </div>
    );
}