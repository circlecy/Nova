import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file0, setFiles0] = useState([]);
  const [file1, setFiles1] = useState([]);
  const [file2, setFiles2] = useState([]);
  const { user } = useContext(Context);
  //const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file0) {
      const data = new FormData();
      const filename = Date.now() + file0.name;
      data.append("name", filename);
      data.append("file", file0);
      newPost.photo0 = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    if (file1) {
      const data = new FormData();
      const filename = Date.now() + file1.name;
      data.append("name", filename);
      data.append("file", file1);
      newPost.photo1 = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    if (file2) {
      const data = new FormData();
      const filename = Date.now() + file2.name;
      data.append("name", filename);
      data.append("file", file2);
      newPost.photo2 = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };

  const showPreview0 = (e) => {
    if (e.target.files.length > 0) {
      setFiles0(e.target.files[0]);
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("file-ip-0-preview");
      preview.src = src;
      preview.style.display = "block";
      document.getElementById("upload-content0").style.display = "none";
      document.getElementById("file-name-0").innerHTML = e.target.files[0].name;
    }
  }

  const showPreview1 = (e) => {
    if (e.target.files.length > 0) {
      setFiles1(e.target.files[0]);
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
      document.getElementById("upload-content1").style.display = "none";
      document.getElementById("file-name-1").innerHTML = e.target.files[0].name;
    }
  }

  const showPreview2 = (e) => {
    if (e.target.files.length > 0) {
      setFiles2(e.target.files[0]);
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("file-ip-2-preview");
      preview.src = src;
      preview.style.display = "block";
      document.getElementById("upload-content2").style.display = "none";
      document.getElementById("file-name-2").innerHTML = e.target.files[0].name;
    }
  }

  return (
    <div className="write container">
      <form className="writeForm" onSubmit={handleSubmit}>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        <div className="writeFormGroup">
          <div className="image0">
            <div className="wrapper">
              <label htmlFor="file0">
                <div className="text" id="upload-content0">
                  <span>+</span><br />
                  <span>Upload Image</span>
                </div>
                <div className="image">
                  <img src="" alt="" id="file-ip-0-preview" />
                </div>
              </label>
              <input type="file" id="file0" name="file0" accept="image/*" style={{ display: "none" }} onChange={(e) => showPreview0(e)}></input>
            </div>
            <div className="file-name" id="file-name-0"></div>
          </div>
          <div className="image1">
            <div className="wrapper">
              <label htmlFor="file1">
                <div className="text" id="upload-content1">
                  <span>+</span><br />
                  <span>Upload Image</span>
                </div>
                <div className="preview image">
                  <img src="" alt="" id="file-ip-1-preview" />
                </div>
              </label>
              <input type="file" id="file1" name="file1" accept="image/*" style={{ display: "none" }} onChange={(e) => showPreview1(e)}></input>
            </div>
            <div className="file-name" id="file-name-1"></div>
          </div>
          <div className="image2">
            <div className="wrapper">
              <label htmlFor="file2">
                <div className="text" id="upload-content2">
                  <span>+</span><br />
                  <span>Upload Image</span>
                </div>
                <div className="preview image">
                  <img src="" alt="" id="file-ip-2-preview" />
                </div>
              </label>
              <input type="file" id="file2" name="file2" accept="image/*" style={{ display: "none" }} onChange={(e) => showPreview2(e)}></input>
            </div>
            <div className="file-name" id="file-name-2"></div>
          </div>
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
