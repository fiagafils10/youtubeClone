import React, { FC, useContext } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { VideosContext } from "../context/VideosContext";
import { ChannelCard, VideoCard } from "./";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  videoFetched?:any[]|null,
  directionStack?:'row'|'column'
}


const Videos:FC<Props> = ({videoFetched, directionStack}) => {

  const { videos, setVideos } = useContext(VideosContext);
  
  videoFetched = videos

  
  return (
    <Stack
      direction={directionStack||'row'}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    > 
      {videoFetched?.map((item: any, index:number) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
          {item.id.videoId && <VideoCard video={item}/>}
        

          {/* if videoId exist, it's mean that we have a video, and not a channel */}
        </Box> 
      ))}
    </Stack>
  );
};

export default Videos;

// type Props = {
//   video?:any
// }

// const Videos:FC<Props> = ({video}) => {