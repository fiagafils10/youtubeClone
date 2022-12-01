import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import {AiOutlineYoutube} from 'react-icons/ai'
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
type Props = {
  channelDetail: any;
  marginTop?:string
};

const ChannelCard: React.FC<Props> = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height:'326px',
        margin:'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "fff",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "italic" }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: "gray" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{display:'flex', justifyContent:'center',alignItems:'center', gap:'5px',borderRadius:'5px' ,color:'white',  fontWeight:'italic', background:'red', p:'4PX'}}>
               <AiOutlineYoutube style={{fontSize:'20px'}}/> {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
