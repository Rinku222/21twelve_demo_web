import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Albums from "./Screens/Albums";
import Home from "./Screens/Home";
import Photos from "./Screens/Photos";
import "./App.css";
import "./utils/colors.scss";
import EmptyScreen from "./Screens/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="albums/:userId" element={<Albums />} />
        <Route path="photos/:albumId" element={<Photos />} />
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        <Route path="*" element={<EmptyScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
