import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Course2 from "./pages/Course2";
import Event from "./pages/Event";
import EventGrid from "./pages/EventGrid";
import Post from "./pages/Post";
import About from "./pages/About";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/blog" element={ <Blog/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/course" element={ <Course/>} />
        <Route path="/course2" element={ <Course2/>} />
        <Route path="/event" element={ <Event/>} />
        <Route path="/eventgrid" element={ <EventGrid/>} />
        <Route path="/post" element={ <Post/>} />
        <Route path="/about" element={ <About/>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
