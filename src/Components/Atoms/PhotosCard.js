import React from "react";
import { Grid, Tooltip, Paper } from "@material-ui/core";
import "../../Styles/PhotosCard.css";

const PhotosCard = (props) => {
  const { data, index } = props;

  const { thumbnailUrl, url, title } = data;

  console.log("----->data", data);

  return (
    <div>
      <Paper elevation={8} className="container">
        <div className="container1">
          <Grid container direction="row">
            <Grid item xs={2}>
              <img
                src={thumbnailUrl}
                alt="thumbnailUrl"
                className="image-card"
              />
            </Grid>

            <Grid item xs={9} className="item-container">
              <div className="title-container">
                <div className="title-text">Title:</div>
                <Tooltip title={title} aria-label="add">
                  <div className="content-text">{title}</div>
                </Tooltip>
              </div>
              <div className="url-container">
                <div className="title-text">Url:</div>
                <a href={url} className="url">
                  {url}
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default PhotosCard;
