import { useEffect, useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchApi";

import { VideosContext } from "../context/VideosContext";

const SearchFeed = () => {
  const { setVideos } = useContext(VideosContext);

  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data: any) =>
      setVideos(() => data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
       Search results for :  <span style={{ color: "#f31503" }}> {searchTerm} </span>
      </Typography>
      <Videos directionStack="column"/>
    </Box>
  );
};

export default SearchFeed;
