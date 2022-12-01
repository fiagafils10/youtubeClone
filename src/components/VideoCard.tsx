import { FC } from "react";

import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";



type Props = {
  video: any;
};

const VideoCard: FC<Props> = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video; // destructuring

  //videoId its the <<link>> of video in api

  // video comes from Video.tsx and it's the representation of single element of mapped api array

  return (
    <Card sx={{width:'320px', boxShadow:'none', borderRadius:0}}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: 358, height: 180, objectFit:'cover' }}
        />
        <CardContent sx={{backgroundColor:'#1e1e1e' ,height:'106px'}}>
          <Link to={`/video/${videoId}`}>
            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                { snippet.title.slice(0, 60)+'...'}
            </Typography>
            
          </Link>
          <Link to={`/channel/${snippet.channelId}`}>
            <Typography variant='subtitle1' fontWeight='bold' color='gray'>
                {snippet?.channelTitle} <CheckCircle sx={{fontSize:12, color:'gray'}}/>
            </Typography>

          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
