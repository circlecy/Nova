import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./gallery.css";

export default function Gallery() {
  const { user } = useContext(Context);
  const location = useLocation();
  const PF = "http://45.80.181.65:5000/images/album/";
  const [Id, setId] = useState("");
  const album = decodeURI(location.pathname.split("/")[2]);
  const [photosList, setPhotoList] = useState([]);
  const [photosFile, setPhotoFile] = useState([]);
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });
  //const [updateMode, setUpdateMode] = useState(false);
  //const [album, setAlbum] = useState([]);
  //const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });
  //const modal = document.getElementById('my-modal');

  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await axiosInstance.get("/albums?event=" + album);
      setAlbumPhotos(res.data[0].photos);
      setId(res.data[0]._id);
    };
    fetchAlbum();
  }, [location, album]);


  const openModal = () => {
    document.getElementById('my-modal').style.display = 'block';
  };
  const closeModal = () => {
    document.getElementById('photos').value = null;
    setPhotoList([]);
    setPhotoFile([]);
    document.getElementById('my-modal').style.display = 'none';
  };

  window.addEventListener('click', outsideClick);
  function outsideClick(e) {
    if (e.target == document.getElementById('my-modal')) {
      document.getElementById('photos').value = null;
      setPhotoList([]);
      setPhotoFile([]);
      document.getElementById('my-modal').style.display = 'none';
    }
  }

  const showList = (e) => {
    const listArr = [];
    const fileArr = [];
    for (var i = 0; i < e.target.files.length; i++) {
      listArr.push(e.target.files[i].name);
      fileArr.push(e.target.files[i]);
    }
    setPhotoList(photosList.concat(listArr));
    setPhotoFile(photosFile.concat(fileArr));
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    const photoArr = [];
    for (var i = 0; i < photosFile.length; i++) {
      const data = new FormData();
      data.append("name", photosFile[i].name);
      data.append("event", album);
      data.append("file", photosFile[i]);
      const object = { name: photosFile[i].name };
      photoArr.push(object);
      try {
        await axios.post("/upload/gallery", data);
      } catch (err) { }
    }
    const newPhoto = {
      album: album,
      photo: photoArr,
    };
    try {
      console.log("newPhoto", newPhoto)
      await axios.put("/albums/update/" + Id, newPhoto);
      window.location.reload();
      document.querySelector('#my-modal').style.display = 'none';
    } catch (err) { }

  };

  return (
    <div className="galleries">
      <div className="dialog" >
        {user ? (
          <button id="modal-btn" className="button" onClick={openModal}>新增相片</button>
        ) : (<br />)}
        <div id="my-modal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>新增相片</h2>
            </div>
            <div className="modal-body">
              <input
                type="file" multiple="multiple"
                name="file"
                id="photos"
                accept="image/jpeg, image/png, image/jpg"
                className="photoInput"
                onChange={e => showList(e)}
              />
              <p>Selected files:</p>
              <div id="fileList">
                <ul>
                  {photosList.map((photo, i) => (
                    <li key={i}>{(i + 1)}. {(photo)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button className="createButton" onClick={handleUpload}>提交</button>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-gallery">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">{album}相簿</h2><br />
          </div>
          <div className="row photos">
            {albumPhotos.map((photo, i) => (
              <div key={i} className="photos-margin col-sm-6 col-md-4 col-lg-3 item"><a href={PF + album + "/" + photo.name} data-lightbox="photos"><img className="img-fluid" src={PF + album + "/" + photo.name} alt="" /></a></div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
