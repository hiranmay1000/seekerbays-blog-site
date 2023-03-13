import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import React, { useState, Suspense, useEffect } from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Contents from "./components/Contents.jsx";
import Error404 from "./components/Error404.jsx";
import FirstBlog from "./myblogs/FirstBlog.jsx";
import SecondBlog from "./myblogs/SecondBlog.jsx";
import ThirdBlog from "./myblogs/ThirdBlog.jsx";
import Resume from "./components/Resume.jsx";

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
  const [themeColor, setThemeColor] = useState("light");

  const feedbackTimeout = () => {
    setTimeout(() => {
      document.getElementById("alert-box-container").style.display = "none";
    }, 3000);
    document.getElementById("alert-box-container").style.display = "flex";
  }

  const setLightTheme = () => {
    setDarkMode(true);
    setIcon(<BsSunFill />);
    setDisplayModes("Light mode")
    feedbackTimeout();
    setThemeColor("light");
    document.body.style.background = "#dcdaff";
  }

  // const setDarkTheme = () => {
  //   setDarkMode(false);
  //   setIcon(<BsMoonStarsFill />);
  //   setDisplayModes("Dark mode")
  //   feedbackTimeout();
  //   setThemeColor("dark");
  //   document.body.style.background = "#04091f";
  // }


  const setCherryBlue = () => {
    setThemeColor("cherryBlue");
    setDarkMode(false);
    setIcon(<BsMoonStarsFill />);
    setDisplayModes("Cherry Blue theme")
    feedbackTimeout();
    document.body.style.background = "#04091f";
  };

  const setPineappleMint = () => {
    setThemeColor("pineappleMint");
    setDarkMode(false);
    setIcon(<BsMoonStarsFill />);
    setDisplayModes("Pineapple Mint theme")
    feedbackTimeout();
    document.body.style.background = "#def2e8";
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
    setDisplayModes(darkMode ? "Light mode" : "Dark mode");
    feedbackTimeout();
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleThemeChange = (color) => {
    switch (color) {
      case 'def':
        setLightTheme();
        break;
      case 'cherry':
        setCherryBlue();
        break;
      case 'pine':
        setPineappleMint();
        break;

      default:
        break;
    }
  }

  return (
    <Router>
      <Header toggleMode={toggleMode} icon={icon} displayModes={displayModes} handleThemeChange={handleThemeChange} />
      <Routes>
        <Route path="*" element={<Error404 themeColor={themeColor} />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume themeColor={themeColor} />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/firstblog" element={<Suspense fallback={<div>Loading...</div>}><FirstBlog themeColor={themeColor} /></Suspense>} />
        <Route path="/secondblog" element={<SecondBlog themeColor={themeColor} />} />
        <Route path="/thirdblog" element={<ThirdBlog themeColor={themeColor} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
