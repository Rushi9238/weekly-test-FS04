import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Footer from "./Components/Footer"

import "./Styles/App.css";
import "./Styles/Header.css"
import "./Styles/Home.css"
import "./Styles/Footer.css"
function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}  />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
