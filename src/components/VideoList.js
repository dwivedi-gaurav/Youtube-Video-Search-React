import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    render(){
        const videoItem=this.props.videos.map((video)=>{
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} />
        });
        return(
            <div className="ui relaxed divided list">
                {videoItem}
            </div>
        );
    }
}

export default VideoList;