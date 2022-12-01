import { Box } from "@mui/material";
import React, { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  {Navbar, ChannelDetail, Feed, SearchFeed, VideoDetail } from "./components/";

const App: FC = () => {
  return (
    <BrowserRouter>
     <Box
     sx={{backgroundColor:'#000'}}
     >
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        
      </Routes>

     </Box> 
    </BrowserRouter>
  );
};
export default App;
