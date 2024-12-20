
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./st-peters-components/Login";
import Home from "./st-peters-components/Home";
import Photos from "./st-peters-components/Photos";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}
