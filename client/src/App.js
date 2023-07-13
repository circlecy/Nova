import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TopBar1 from "./components/topbar/TopBar1";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutus/About-Us";
import Award from "./pages/award/Award";
import Posts from "./pages/posts/Posts";
import Album from "./pages/album/Album";
import Gallery from "./pages/gallery/Gallery";
import Team from "./pages/team/Team";
import ContactUs from "./pages/contactus/Contact-Us";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./index.css";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar1 />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/award" element={<Award />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/album" element={<Album />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />       
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/album/:albumName" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
