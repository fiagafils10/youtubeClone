import { createContext, useState } from "react";

export const VideosContext = createContext<any>(null)

const VideosContextProvider = (props:any) => {
    const [videos, setVideos] = useState([])
    

    return(
        <VideosContext.Provider value={{videos, setVideos}}>
                {props.children}
        </VideosContext.Provider>
    )
}

export default VideosContextProvider

