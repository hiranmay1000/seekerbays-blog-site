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
  const [tooltip, setTooltip] = useState("Dark Mode");
  const [darkMode, setDarkMode] = useState(false);
  const [displayModesFeedback, setDisplayModesFeedback] = useState("Light Mode");
  const [currTheme, setCurrTheme] = useState("");

  const feedbackTimeout = () => {
    setTimeout(() => {
      document.getElementById("alert-box-container").style.display = "none";
    }, 3000);
    document.getElementById("alert-box-container").style.display = "flex";
  }


  const setCustomThemes = (themeName) => {
    if (currTheme !== "") {
      document.body.classList.remove(currTheme);
      document.body.classList.add(themeName);
    } else {
      document.body.classList.add(themeName);
    }
    feedbackTimeout();
    setCurrTheme(themeName)
  }

  const toggleMode = () => {
    if (currTheme === "dark-mode" || currTheme === "") {
      setDarkMode(!darkMode);
      setDisplayModesFeedback(!darkMode ? "Dark mode"  : "Light mode");
      setTooltip(!darkMode ? "Light Mode": "Dark Mode");
      feedbackTimeout();
    } else {
      setDisplayModesFeedback("Cannot change modes in custom themes");
      feedbackTimeout();
    }
  };

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.remove("dark-mode");
      setIcon(<BsSunFill />);
    } else {
      document.body.classList.add("dark-mode");
      setIcon(<BsMoonStarsFill />);
    }
  }, [darkMode]);


  const handleThemeChange = (color) => {
    switch (color) {
      case 'def':
        document.body.classList.remove(currTheme);
        setCurrTheme("");
        setDisplayModesFeedback("Default theme applied")
        feedbackTimeout();
        break;
      case 'cherry':
        setCustomThemes("cherry-blue");
        setDisplayModesFeedback("Cherry Blue theme applied")
        break;
      case 'pine':
        setCustomThemes("pineapple-mint");
        setDisplayModesFeedback("Pineapple Mint theme applied")
        break;
      case 'sandlewood':
        setCustomThemes("sandlewood-yellow");
        setDisplayModesFeedback("Sandlewood yellow theme applied")
        break;

      default:
        break;
    }
  }

  return (
    <Router>
      <Header tooltip={tooltip} toggleMode={toggleMode} icon={icon} displayModesFeedback={displayModesFeedback} currTheme={currTheme} handleThemeChange={handleThemeChange} />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/firstblog" element={<Suspense fallback={<div>Loading...</div>}><FirstBlog /></Suspense>} />
        <Route path="/secondblog" element={<SecondBlog />} />
        <Route path="/thirdblog" element={<ThirdBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
