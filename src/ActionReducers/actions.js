import axios from 'axios';

function getSearchTerm(searchTerm){
    console.log(searchTerm)
    const API_KEY = "AIzaSyBm4QHi_ipONqb30-d9HB-bnFWK-NV7-BY"
   
    let request = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&maxResults=25&part=snippet&key=${API_KEY}`)

    return (dispatch) => {
        request.then(res => {
            // console.log(res)
            dispatch({
                type: "search_videos",
                payload: res.data.items
            })
        })
    }
}

function getPlayingVideoId(video) {
    return {
        type: "Get_videoId",
        payload: video.id.videoId
    }
}

function addBookmarked(video){
    return{
        type:"GET_bookmarked_video",
        payload:video.id.videoId
    }
}

function removeFromBookmarked(index){
    return{
        type:"REMOVE_BOOKMARKED",
        payload:index
    }
}

function removeFromPlayed(index){
    return{
        type:"REMOVE_PLAYED",
        payload:index
    }
}
   
   
export { getSearchTerm, getPlayingVideoId, addBookmarked, removeFromPlayed, removeFromBookmarked}