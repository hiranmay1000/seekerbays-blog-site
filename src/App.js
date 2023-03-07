import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contents from "./components/Contents";

import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contents.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
