import {  useEffect, useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchApi";
import { CategoryContext } from "../context/CategoryContext";
import { VideosContext } from "../context/VideosContext";

const Feed = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const {  setVideos } = useContext(VideosContext);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data: any) => setVideos(() => data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff",  }}
        >
          Made with{" "}
          <AiOutlineHeart
            style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}
          />{" "}
          by Fiaga Fils
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}> Videos </span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
