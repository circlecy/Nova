import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./album.css";

export default function Album() {
    const PF = "http://45.80.181.65:5000/images/album/";
    const { user } = useContext(Context);
    const [album, setAlbum] = useState([]);
    const [folder, setFolder] = useState("");
    const { search } = useLocation();
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });

    useEffect(() => {
        const fetchAlbum = async () => {
            const res = await axiosInstance.get("/albums" + search);
            setAlbum(res.data);
        };
        fetchAlbum();
    }, [search]);

    const modal = document.querySelector('#my-modal');
    const openModal = () => { modal.style.display = 'block'; };
    const closeModal = () => { modal.style.display = 'none'; };

    window.addEventListener('click', outsideClick);
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
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


    return (
        <div className="album">
            <main className="wrapper">
                <section className="album-title bg-dark-overlay text-center">
                    <div className="container">
                        <div className="album-title__holder">
                            <h1 className="album-title__title">活動相簿</h1>
                            <p className="album-title__subtitle"></p>
                        </div>
                    </div>
                </section>
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
                                {album.album && <img className="postImg" src={!album.photos.length ? require('../../assets/img/Nova-Banner.jpg') : PF + album.album + "/" + album.photos[0].name} alt="" />}
                                <div className="postInfo link">
                                    <Link to={`/album/${album.album}`} className="link">
                                        <span className="albumTitle">{album.album}</span>
                                    </Link>
                                </div>
                                {/*<p className="postDesc">123</p>*/}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
