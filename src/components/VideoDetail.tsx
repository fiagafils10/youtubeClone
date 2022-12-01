import React, { useEffect, useState, FC } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchApi";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<any | null>(null);
  const [videos, setVideos] = useState<any[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet,relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
      );
      console.log(videos)
  }, [id]);

  if (!videoDetail?.snippet) {
    return <Loader/>
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  console.log(videoDetail);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} >
        <Box flex={1} sx={{height:'75vh'}}>
          <Box sx={{padding:'0 20px', width: '90%', position:"sticky", top: "100px", background:'white'}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2} sx={{fontSize: {xs: "14px", md: "20px" }}}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap='wrap'
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant="subtitle1"
                  color="#fff"
                  sx={{
                    p: "2px 5px",
                    background: "rgba(255, 255, 255, 0.267)",
                    borderRadius: "5px",
                    fontSize: {xs: "14px", md: "20px"}
                  }}
                >
                  {channelTitle}{" "}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography variant="body1" sx={{ opacity: 0.7, fontSize: {xs: "14px", md: "20px"} }}>
                  {parseInt(viewCount).toLocaleString()} Views{" "}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes{" "}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
          <Videos videoFetched={videos} directionStack={'column'} />
        </Box>
      </Stack>


    </Box>
  );
};

export default VideoDetail;
