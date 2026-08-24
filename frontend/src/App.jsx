import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
// import Services from "./pages/Services";
// import Info from "./pages/Info";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} />
      <Route path="/info" element={<Info />} /> */}
        </Routes>
    );
}
