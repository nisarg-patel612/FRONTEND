import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home.jsx"; 
import Blog from "./Pages/Blog.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Book_Now from "./Pages/Book_Now.jsx";
import Presidential_Rooms from "./Pages/Presidential_Rooms.jsx";
import Luxury_Rooms from "./Pages/Luxury_Rooms.jsx";
import Deluxe_Rooms from "./Pages/Deluxe_Rooms.jsx";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<Book_Now />} />
        <Route path="/presidential_room" element={<Presidential_Rooms />} />
        <Route path="/luxury_room" element={<Luxury_Rooms />} />
        <Route path="/Deluxe_Room" element={<Deluxe_Rooms />} />
      </Routes>
    </Router>
  );
}

export default App;
