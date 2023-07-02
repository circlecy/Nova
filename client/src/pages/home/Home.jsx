import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import News from "../../components/news/News";
import Award from "../../components/award/Award";
import JoinUs from "../../components/joinus/JoinUs";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
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
    <>
      <Header />
      <About />
      <News posts={posts} />
      <Award />
      <JoinUs />
      {/*<div className="home">
        <Posts posts={posts} />
        {/*<Sidebar />
      </div>*/}
    </>
  );
}
