import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      <h1>App component</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
