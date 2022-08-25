import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlbumsCard from "../Components/Atoms/AlbumsCard";
import ApiCall from "../Services";
import "../Styles/Album.css";

const Albums = () => {
  const navigate = useNavigate();

  const params = useParams();

  const { userId } = params;

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await ApiCall({
      url: "https://jsonplaceholder.typicode.com/albums",
      method: "GET",
    });
    setData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData = data?.filter((s) => s.userId == userId);

  return (
    <div className="container">
      {filteredData.map((item) => {
        const { id } = item;
        return (
          <div>
            <AlbumsCard album={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
