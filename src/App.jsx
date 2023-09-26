import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import FetchPost from "./API/api";
import Header from "./components/header";
import Posts from "./pages/post";
import Home from "./pages/home";
import Profile from "./pages/profile";
import UserLanding from "./pages/UserLanding";
import { checkIfLoggedIn } from "./API/LoginApi";

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const results = await FetchPost();
  //       setPosts(results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <div className="main-container">
        <Link id="page" to="/">
          Home
        </Link>
        <Link id="page" to="/posts">
          Post
        </Link>
        <Link id="page" to="/profile">
          Profile
        </Link>
        <Link id="page" to="/UserLanding">
          {checkIfLoggedIn() ? "Sign-In" : "Sign Out"}
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/UserLanding" element={<UserLanding />} />
        <Route path="/sign-out" component={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
