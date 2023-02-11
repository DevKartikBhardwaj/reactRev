import Header from "./components/Header";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NF from "./components/NF";
import Product from "./components/Product"
function App() {

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NF />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;