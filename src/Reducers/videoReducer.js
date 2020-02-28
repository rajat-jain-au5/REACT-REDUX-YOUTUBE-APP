
let videoState = {
    // searchTerm:"",
    videos: [],
    playingVideoId: "",
    playedVideos: [],
    bookmarkedVideos: [],
    bookmarkIds:[]
}


export function videoReducer(state = videoState, action) {
    let stateCopy ={...state}
    console.log(stateCopy)
    switch (action.type) {
        case "search_videos":
            stateCopy.videos = action.payload
            return stateCopy
        case "Get_videoId":
            stateCopy.playingVideoId = action.payload
            // console.log(stateCopy)
            let video = stateCopy.videos.filter(video => video.id.videoId === action.payload)
            if (stateCopy.playedVideos.includes(video[0]) === false)
                stateCopy.playedVideos=[...stateCopy.playedVideos,video[0]]
            
            return stateCopy
        case "GET_bookmarked_video":
            stateCopy.bookmarkedIds = action.payload
            let bookmarkedVideo=stateCopy.videos.filter(video=>video.id.videoId===action.payload)  
            if(stateCopy.bookmarkedVideos.includes(bookmarkedVideo[0])===false)
               stateCopy.bookmarkedVideos=[...stateCopy.bookmarkedVideos,bookmarkedVideo[0]]  
               console.log(stateCopy)
               return stateCopy
        case "REMOVE_PLAYED":
            stateCopy.playedVideos=stateCopy.playedVideos.filter(item=>item.id.videoId !== action.payload.id.videoId)
            return stateCopy       
        case "REMOVE_BOOKMARKED":
            stateCopy.bookmarkedVideos = stateCopy.bookmarkedVideos.filter(item => item.id.videoId !== action.payload.id.videoId)   
            return stateCopy    
        default:
            return stateCopy
    }
}



         