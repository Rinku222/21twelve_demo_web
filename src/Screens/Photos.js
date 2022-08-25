import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotosCard from "../Components/Atoms/PhotosCard";
import ApiCall from "../Services";
import { Grid } from "@material-ui/core";
import Left from "../Assets/left-arrow.svg";
import Right from "../Assets/right-arrow.svg";
import "../Styles/Album.css";
import { isBrowser } from "react-device-detect";

const PAGINATION_NUMBER = isBrowser ? 16 : 8;

const Photos = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(PAGINATION_NUMBER - 1);

  const { albumId } = params;

  const loadData = async () => {
    const response = await ApiCall({
      url: "https://jsonplaceholder.typicode.com/photos",
      method: "GET",
    });
    setData(response);
  };

  const filteredData = data?.filter((s) => s.albumId == albumId);

  useEffect(() => {
    loadData();
  }, []);

  const handlePrev = () => {
    if (initial - PAGINATION_NUMBER < 0) {
      setInitial(0);
    }

    if (initial) {
      setInitial(initial - PAGINATION_NUMBER);
      setFinal(final - PAGINATION_NUMBER);
    }
  };

  const handleNext = () => {
    if (final + PAGINATION_NUMBER > filteredData.length) {
      setFinal(filteredData.length);
    }

    if (final < filteredData.length - PAGINATION_NUMBER) {
      setFinal(final + PAGINATION_NUMBER);
      setInitial(initial + PAGINATION_NUMBER);
    }
  };

  return (
    <Grid container spacing={5} className="Home-Container">
      <img src={Left} className="image-left" onClick={handlePrev} alt="left" />

      <img
        src={Right}
        alt="Right"
        className="image-right"
        onClick={handleNext}
      />

      {filteredData.slice(initial, final).map((item, index) => {
        return (
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <PhotosCard data={item} index={index} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Photos;
