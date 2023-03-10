import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contents from "./components/Contents";
import Error404 from "./components/Error404";
import FirstBlog from "./myblogs/FirstBlog"
import SecondBlog from "./myblogs/SecondBlog"


import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/error404.scss';
import './styles/contents.scss';
import './styles/colors.scss';

function App() {

  const [icon, setIcon] = useState(<BsSunFill />);
  const [darkMode, setLightMode] = useState(true);

  const toggleMode = () => {
    const readPages = document.getElementsByClassName("read-page");
    const infoPages = document.getElementsByClassName("info-page");
    // const contentPage = document.getElementById("content-page");

    if (!darkMode) {
      setLightMode(true);
      setIcon(<BsSunFill />);
      document.body.style.background = "#dcdaff";

      for (let i = 0; i < readPages.length; i++) {
        readPages[i].style.background = "#cecef7";
        infoPages[i].style.background = "#020f2c";
        readPages[i].style.color = "#000000";
      }
    } else {
      setLightMode(false);
      setIcon(<BsMoonStarsFill />);
      document.body.style.background = "#020f2c";

      for (let i = 0; i < readPages.length; i++) {
        readPages[i].style.background = "#2c2c50";
        infoPages[i].style.background = "#040414";
        readPages[i].style.color = "#fff";
      }
    }
  };
  return (
    <Router>
      <Header toggleMode={toggleMode} icon={icon} />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/firstblog" element={<FirstBlog />} />
        <Route path="/secondblog" element={<SecondBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
