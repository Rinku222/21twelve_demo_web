import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HomeCard from "../Components/Atoms/HomeCard";
import ApiCall from "../Services";
import "../Styles/Album.css";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await ApiCall({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    });
    setData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Grid container spacing={5} className="Home-Container">
      {data?.map((item) => {
        return (
          <Grid item xs={12} lg={4} md={4} sm={6}>
            <HomeCard user={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
