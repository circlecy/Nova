import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./album.css";

export default function Album() {
    const PF = "http://45.80.181.65:5000/images/album/";
    const { user } = useContext(Context);
    const [album, setAlbum] = useState([]);
    const [folder, setFolder] = useState("");
    const [current, setCurrent] = useState(0);
    const videos = ["nova 2022.mp4", "nova 2021.mp4"];
    const slides = document.getElementsByClassName("slide-image");
    const bubbles = document.getElementsByClassName("bubble-outer");
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });

    useEffect(() => {
        const fetchAlbum = async () => {
            const res = await axiosInstance.get("/albums");
            setAlbum(res.data);
        };
        fetchAlbum();
        bubbles[current].style.borderColor = "white";
    }, [bubbles, current]);

    //dialog 
    const modal = document.querySelector('#my-modal');
    const openModal = () => { modal.style.display = 'block'; };
    const closeModal = () => { modal.style.display = 'none'; };

    window.addEventListener('click', outsideClick);
    function outsideClick(e) {
        if (e.target === modal) { modal.style.display = 'none'; }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const newAlbum = {
            album: folder,
            photos: [],
        };
        try {
            await axios.post("/albums", newAlbum);
            window.location.reload();
            document.querySelector('#my-modal').style.display = 'none';
        } catch (err) { }
    };

    ///////////////////////////////////////////////////////////////

    const nextImage = () => {
        let newIndex = (current === videos.length - 1 ? 0 : current + 1);
        slides[current].className = "slide-image leftOut";
        slides[newIndex].className = "slide-image leftIn";
        updateBubbles(newIndex);
        setCurrent(newIndex);
    }
    const prevImage = () => {
        let newIndex = (current === 0 ? videos.length - 1 : current - 1);
        slides[current].className = "slide-image rightOut";
        slides[newIndex].className = "slide-image rightIn";
        updateBubbles(newIndex);
        setCurrent(newIndex);
    }
    const jumpImage = (e) => {
        let jumpIndex = parseInt(e.target.id);
        if (jumpIndex === current) return;
        if (jumpIndex - current >= 0) {
            slides[current].className = "slide-image leftOut";
            slides[jumpIndex].className = "slide-image leftIn";
        } else {
            slides[current].className = "slide-image rightOut";
            slides[jumpIndex].className = "slide-image rightIn";
        }
        updateBubbles(jumpIndex);
        setCurrent(jumpIndex);
    }
    const updateBubbles = (highlight) => {
        bubbles[current].style.borderColor = "black";
        bubbles[highlight].style.borderColor = "white";
    }

    return (
        <div className="album">
            <div className="gallery-container">
                <span className="button-prev" onClick={prevImage}>chevron_left</span>
                <span className="button-next" onClick={nextImage}>chevron_right</span>
                <div className="gallery-track">
                    {
                        videos.map((video, index) => {
                            return (
                                <div className="slide-image" style={(index === 0) ?
                                    { transform: "translateX(0%)" } : { transform: "translateX(100%)" }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h1 className="album-title__title">{(index === 0 ? "2022 Nova Team" : "2021 Nova Team")}</h1>
                                            <h1 className="album-title__subtitle">活動片段</h1>
                                        </div>
                                        <div className="col-sm-6">
                                            <video className="albumVideo" src={PF + "/" + video} type="video/mp4" controls />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="gallery-footer">
                    {
                        videos.map((image, index) => {
                            return <div className="bubble-outer" onClick={jumpImage} id={index}>
                                <div className="bubble-inner" id={index}></div>
                            </div>
                        })
                    }
                </div>
            </div>

            <main className="wrapper">
                {/*<section className="album-title text-center">
                    <div className="container">
                        <div className="album-title__holder">
                            <h1 className="album-title__title">活動相簿</h1>
                            <p className="album-title__subtitle"></p>
                        </div>
                    </div>
                </section>*/}
                <div className="dialog">
                    {user ? (
                        <button id="modal-btn" className="button" onClick={openModal}>新增相簿</button>
                    ) : (<br />)}
                    <div id="my-modal" className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>新增相簿</h2>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    placeholder="輸入相簿名稱"
                                    className="albumInput"
                                    autoFocus={true}
                                    onChange={e => setFolder(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button className="createButton" onClick={handleCreate}>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="album-list">
                    <ul>
                        {album.slice().reverse().map((album, i) => (
                            <li key={i}>
                                {album.album && <img className="albumImg" src={!album.photos.length ? require('../../assets/img/Nova-Banner.jpg') : PF + album.album + "/" + album.photos[0].name} alt="" />}
                                <div className="albumInfo link">
                                    <Link to={`/album/${album.album}`} className="link">
                                        <span className="albumTitle">{album.album}</span>
                                    </Link>
                                </div>
                                {/*<p className="postDesc"></p>*/}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
