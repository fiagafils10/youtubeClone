import {useState, useEffect, useContext, FC} from 'react';
import {useParams} from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchApi';
import { VideosContext } from "../context/VideosContext";

import {Videos, ChannelCard} from './';
import { Box } from '@mui/material'; 




const ChannelDetail:FC = () => {

  const [videos, setVideos] = useState<any[]>([])
  const [channelDetail, setChannelDetail] = useState(null)

  const {id} = useParams()

  useEffect(()=> {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]))
    
  
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items))
  
    console.log(videos)
  }, [id])

  return (
    <Box minHeight = '95vh'>
        <Box>
          <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', zIndex:10, height:'300px'}}/> 
        </Box>
          <ChannelCard marginTop='-93px' channelDetail={channelDetail}/>
          <Box display='flex' justifyContent='center' alignItems='center' p='2'>
            <Box>
              <Videos videoFetched={videos}/>
            </Box>
          </Box>
    </Box>
  )
}

export default ChannelDetail