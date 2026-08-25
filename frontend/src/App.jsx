import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/info" element={<Info />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
