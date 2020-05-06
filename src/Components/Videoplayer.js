import React from 'react';
import { connect } from  'react-redux';


class Videoplayer extends React.Component{
    render(){
        return(
            <div style={{marginLeft:"50px"}}>
                <iframe width="720" height="415" title="youtube video"
                    src={`https://www.youtube.com/embed/${this.props.playingVideoId}`}>
                </iframe>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {playingVideoId:state.video.playingVideoId}
}
export default connect(mapStateToProps) (Videoplayer)