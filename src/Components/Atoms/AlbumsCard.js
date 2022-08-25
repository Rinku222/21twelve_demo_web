import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../Assets/folder.png";
import "../../Styles/AlbumCard.css";
import { Grid, Tooltip, Paper } from "@material-ui/core";

const AlbumsCard = (props) => {
  const navigate = useNavigate();

  const { album } = props;
  const { id, title } = album;

  return (
    <div
      className="Album-Card-Container"
      onClick={() => navigate(`/photos/${id}`)}
    >
      <div className="image-div">
        <img src={Image} alt="icon" />
      </div>

      <Tooltip title={title}>
        <div className="title">{title}</div>
      </Tooltip>
    </div>
  );
};

export default AlbumsCard;
