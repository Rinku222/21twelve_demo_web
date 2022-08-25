import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../Assets/404 image.png";
import "../Styles/404.css";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="error_container">
      <img src={ErrorImage} alt="logo" />
      <button className="home_button" onClick={() => navigate("/")}>
        GO TO HOME
      </button>
    </div>
  );
};

export default Index;
