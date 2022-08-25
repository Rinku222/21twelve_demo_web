import React from "react";
import { Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "../../Styles/HomeCard.css";

const SingleRow = (props) => {
  const { data1, data2 } = props;
  return (
    <div className="container">
      <div className="card-text">{data1}</div>
      <div className="card-text">{data2}</div>
    </div>
  );
};

const HomeCard = (props) => {
  const navigate = useNavigate();
  const { user } = props;

  const { id, email, website, phone, username, address, company } = user;

  const { name, catchPhrase, bs } = company;

  const { city, street, suite, zipcode } = address;

  const companyAddress = city + ", " + street + ", " + suite + ", " + zipcode;

  return (
    <Paper
      elevation={8}
      className="Home-card"
      onClick={() => {
        navigate(`/albums/${id}`);
      }}
    >
      <div className="Home-card1">
        <div className="Name-Container">{name}</div>
        <SingleRow data1={username} data2={phone} />
        <SingleRow data1={email} data2={website} />
        <div className="address">{companyAddress}</div>
      </div>
    </Paper>
  );
};

export default HomeCard;
