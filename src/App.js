import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home.jsx"; 
import Blog from "./Pages/Blog.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Book_Now from "./Pages/Book_Now.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<Book_Now />} />
      </Routes>
    </Router>
  );
}

export default App;
