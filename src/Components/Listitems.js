import React from 'react'
import { connect } from "react-redux"
import{getPlayingVideoId,addBookmarked, removeFromPlayed, removeFromBookmarked} from '../ActionReducers/actions'
import { bindActionCreators } from 'redux'
class Listitems extends React.Component {
    render() {
        //  console.log("Listitems",this.props)
        const { video, index } = this.props
        return (
            <li className="mt-4" style={{ listStyle: "none" }}>
                {this.props.page === "videos" &&
                    (<div>
                        <div onClick={() => { this.props.getPlayingVideoId(video) }}>
                            <img src={video.snippet.thumbnails.default.url} alt="" width="250px" height="150px" />
                        </div>
                        <div>
                            {video.snippet.title}
                        </div>
                        <div>
                            <button  className="btn btn-warning btn-sm" onClick={() => this.props.addBookmarked(video)}>Add to Bookmarks</button>
                        </div>
                    </div>)
                }

                {this.props.page === "Played-videos" &&
                   ( <div>
                        <div onClick={() => { this.props.getPlayingVideoId(video) }}>
                            <img src={video.snippet.thumbnails.default.url} alt="" width="250px" height="150px" />
                        </div>
                        <div>
                            {video.snippet.title}
                        </div>
                        <div>
                            <button  className="btn btn-info btn-sm" onClick={() => this.props.removeFromPlayed(index)}>remove from PlayedList</button>
                        </div>
                    </div>)
                }
                {this.props.page === "bookmarked-videos" &&
                    (<div>
                        <div onClick={() => { this.props.getPlayingVideoId(video.id.videoId, index) }}>
                            <img src={video.snippet.thumbnails.default.url} alt="" width="250px" height="150px" />
                        </div>
                        <div>
                            {video.snippet.title}
                        </div>
                        <div>
                            <button className="btn btn-info btn-sm" onClick={() => this.props.removeFromBookmarked(index)}>Remove from Bookmarked</button>
                        </div>
                    </div>)
                }

            </li>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        videos:state.video.videos,
        playedVideos:state.video.playedVideos,
        bookmarkVideos:state.video.bookmarkVideos
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({getPlayingVideoId,addBookmarked, removeFromPlayed, removeFromBookmarked},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (Listitems)