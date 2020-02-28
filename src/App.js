import React from 'react';
import Search from './Components/Search'
import List from './Components/List'
import Videoplayer from './Components/Videoplayer'
import { connect } from 'react-redux'
import './App.css';
// import axios from 'axios'




class App extends React.Component {
  state = {
    // videos: [],
    // playingVideoId: "",
    // playedVideos: [],
    bookmarkedVideos: []
  }
  // fetchVideos = (searchTerm) => {
  //   console.log("in app.js", searchTerm)

  //   let request = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&maxResults=25&part=snippet&key=${API_KEY}`)
  //   request.then(response => {
  //     console.log("res", response)
  //     this.setState({
  //       videos: response.data.items
  //     })
  //   })
  // }

  // setVideoPlayer = (id,index) => {
  //    console.log("id",id,index)
  //   let videos = this.state.playedVideos.slice()
  //   let video = this.state.videos[index] 
  //   videos=videos.filter(el=>el.id.videoId  !== id)
  //   videos.push(video)


  //   this.setState({
  //     playingVideoId: id,
  //     playedVideos: videos
  //   })
  // }
  // addToBookmarkedVideo = (index) => {
  //   // console.log("book",index)
  //   let videos = this.state.bookmarkedVideos.slice()
  //   let video = this.state.videos[index]
  //   videos.push(video)
  //   this.setState({
  //     bookmarkedVideos: videos
  //   })

  // }
  removeFromPlayed=(index)=>{
   let newPlayedList=this.state.playedVideos
   newPlayedList.splice(index,1)
   this.setState({
     playedVideos:newPlayedList
   })
    
  }
  removeFromBookmarked=(index)=>{
    let newBookmarkList=this.state.bookmarkedVideos
    newBookmarkList.splice(index,1)
   this.setState({
    bookmarkedVideos:newBookmarkList
   })
  }
  render() {
   
    return (
      <div>
        <div className="container" >
          <div className="row">
            <div className="col">
              <Search
                // getSearchTerm={(searchTerm) => { this.fetchVideos(searchTerm) }} 
                />
            </div>
          </div>
          <div className="row">


            <div className="col-md-3">
              <List
                page="videos"/>
            </div>


            <div className="col-md-7">
              <Videoplayer

               

              />

              <div className="row">

                <div className="col-md-6">
                 <h4  className="text-center ml-4">Played Videos</h4> 
                  <List
                    page="Played-videos"/>
                </div>

                <div className="col-md-6">
                <h4  className="text-center">Bookmarked Videos</h4> 
                  <List
                    page="bookmarked-videos"/>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state
}
export default connect(mapStateToProps) (App);
