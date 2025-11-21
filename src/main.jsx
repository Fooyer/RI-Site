import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Seminario from "./pages/Seminario";
import Podcast from "./pages/Podcast";
import Storytelling from "./pages/Storytelling";
import VideoCases from "./pages/VideoCases";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/trabalhos/seminario" element={<Seminario />} />
      <Route path="/trabalhos/podcast" element={<Podcast />} />
      <Route path="/trabalhos/storytelling" element={<Storytelling />} />
      <Route path="/trabalhos/video" element={<VideoCases />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
