import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import React, { useState, Suspense } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contents from "./components/Contents";
import Error404 from "./components/Error404";
import FirstBlog from "./myblogs/FirstBlog"
import SecondBlog from "./myblogs/SecondBlog"
import ThirdBlog from "./myblogs/ThirdBlog"

import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/error404.scss';
import './styles/contents.scss';
import './styles/colors.scss';

function App() {

  const [icon, setIcon] = useState(<BsSunFill />);
  const [darkMode, setDarkMode] = useState(true);
  const [displayModes, setDisplayModes] = useState("Light");
  const [theme, setTheme] = useState("light");

  const feedbackTimeout = () => {
    setTimeout(() => {
      document.getElementById("alert-box-container").style.display = "none";
    }, 2500);
    document.getElementById("alert-box-container").style.display = "flex";
  }

  const toggleMode = () => {
    const readPages = document.getElementsByClassName("read-page");
    const infoPages = document.getElementsByClassName("info-page");

    if (!darkMode) {
      setDarkMode(true);
      setIcon(<BsSunFill />);
      setDisplayModes("Light")
      feedbackTimeout();
      setTheme("light");
      document.body.style.background = "#dcdaff";


      for (let i = 0; i < readPages.length; i++) {
        readPages[i].style.background = "#cecef7";
        readPages[i].style.color = "#000000";

        infoPages[i].style.background = "#020f2c";
      }


    } else {
      setDarkMode(false);
      setIcon(<BsMoonStarsFill />);
      setDisplayModes("Dark")
      feedbackTimeout();
      setTheme("dark");
      document.body.style.background = "#020f2c";


      for (let i = 0; i < readPages.length; i++) {
        readPages[i].style.background = "#1a2240";
        readPages[i].style.color = "lightgrey";

        infoPages[i].style.background = "#040414";

      }
    }
  };

  return (
    <Router>
      <Header toggleMode={toggleMode} icon={icon} displayModes={displayModes} />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/firstblog" element={<Suspense fallback={<div>Loading...</div>}><FirstBlog theme={theme} /></Suspense>} />
        <Route path="/secondblog" element={<SecondBlog theme={theme} />} />
        <Route path="/thirdblog" element={<ThirdBlog theme={theme} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
