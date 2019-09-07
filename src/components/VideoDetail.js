import React from 'react';

class VideoDetail extends React.Component{
    render(){
        const {video}=this.props;
        if(video){
            return(
                <div>
                    <div className="ui embed">
                        <iframe title="Video Player" src={`https://www.youtube.com/embed/${video.id.videoId}`}/>
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">{video.snippet.title}</h4>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            );
        }
        return <div>Loading...</div>
    }
}

export default VideoDetail;