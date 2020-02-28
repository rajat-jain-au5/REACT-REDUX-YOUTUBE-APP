import React from 'react'
import { connect } from "react-redux"
import Listitems from '../Components/Listitems'

class List extends React.Component {
    render() {
        // console.log(this.props.playedVideos)
        return (
            <div>
                <ul>
                    {this.props.page === "videos"
                        && this.props.videos &&
                        this.props.videos.map((val, index) =>
                            (
                                <Listitems
                                    // getPlayingVideoId={this.props.getPlayingVideoId}
                                    // addBookmarked={this.props.addBookmarked}

                                    video={val}
                                    index={index}
                                    page={this.props.page}
                                />
                            )
                        )
                    }
                    {
                        this.props.page === "Played-videos"
                        && this.props.playedVideos &&
                        this.props.playedVideos.reverse().map((val,index) =>
                            (   
                                <Listitems
                                    // getPlayingVideoId={this.props.getPlayingVideoId}
                                    removeFromPlayed={this.props.removeFromPlayed}
                                    video={val}
                                    index={val}
                                    page={this.props.page}
                                />
                            )
                        )}
                         {
                        this.props.page === "bookmarked-videos"
                        && this.props.bookmarkedVideos &&
                        this.props.bookmarkedVideos.reverse().map((val, index) =>
                            (   
                                <Listitems
                                    // getPlayingVideoId={this.props.getPlayingVideoId}
                                    // addBookmarked={this.props.addBookmarked}
                                    removeFromBookmarked={this.props.removeFromBookmarked}
                                    video={val}
                                    index={val}
                                    page={this.props.page}
                                />
                            )
                        )}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
    videos:state.video.videos,
    playedVideos:state.video.playedVideos,
    bookmarkedVideos:state.video.bookmarkedVideos}
}
export default connect(mapStateToProps) (List)