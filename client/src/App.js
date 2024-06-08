import ScrollToTop from "./ScrollToTop";
import React, { lazy, Suspense } from 'react';

// import Home from "./pages/home/Home";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import TopBar1 from "./components/topbar/TopBar1";
import Footer from "./components/footer/Footer";
// import AboutUs from "./pages/aboutus/About-Us";
// import Award from "./pages/award/Award";
// import Posts from "./pages/posts/Posts";
// import Album from "./pages/album/Album";
// import Gallery from "./pages/gallery/Gallery";
// import Team from "./pages/team/Team";
// import ContactUs from "./pages/contactus/Contact-Us";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./index.css";

// Placeholder component for lazy loading
const Loading = () => <div>Loading...</div>;

// Lazy-loaded components
const Home = lazy(() => import('./pages/home/Home'));
const AboutUs = lazy(() => import('./pages/aboutus/About-Us'));
const Award = lazy(() => import('./pages/award/Award'));
const Posts = lazy(() => import('./pages/posts/Posts'));
const Album = lazy(() => import('./pages/album/Album'));
const Team = lazy(() => import('./pages/team/Team'));
const ContactUs = lazy(() => import('./pages/contactus/Contact-Us'));
const Register = lazy(() => import('./pages/register/Register'));
const Login = lazy(() => import('./pages/login/Login'));
const Write = lazy(() => import('./pages/write/Write'));
const Settings = lazy(() => import('./pages/settings/Settings'));
const Single = lazy(() => import('./pages/single/Single'));
const Gallery = lazy(() => import('./pages/gallery/Gallery'));

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <ScrollToTop />
      <TopBar1 />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/award"
          element={
            <Suspense fallback={<Loading />}>
              <Award />
            </Suspense>
          }
        />
        <Route
          path="/posts"
          element={
            <Suspense fallback={<Loading />}>
              <Posts />
            </Suspense>
          }
        />
        <Route
          path="/album"
          element={
            <Suspense fallback={<Loading />}>
              <Album />
            </Suspense>
          }
        />
        <Route
          path="/team"
          element={
            <Suspense fallback={<Loading />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            user ? (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            )
          }
        />
        <Route
          path="/login"
          element={
            user ? (
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            )
          }
        />
        <Route
          path="/write"
          element={
            user ? (
              <Suspense fallback={<Loading />}>
                <Write />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            )
          }
        />
        <Route
          path="/settings"
          element={
            user ? (
              <Suspense fallback={<Loading />}>
                <Settings />
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            )
          }
        />
        <Route
          path="/post/:postId"
          element={
            <Suspense fallback={<Loading />}>
              <Single />
            </Suspense>
          }
        />
        <Route
          path="/album/:albumName"
          element={
            <Suspense fallback={<Loading />}>
              <Gallery />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
