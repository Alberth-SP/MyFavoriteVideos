import React, { DOMAttributes, useEffect , useState} from 'react';
import Video from './VideoInterface'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom'
import './VideoItem.css'
import * as videoService from './VideoService'
import { toast } from 'react-toastify';
interface Props{
    video: Video,
    loadVideos: () => void;
}


const VideoItem = ({video, loadVideos}:Props) => {   
    const history = useHistory();

    const handleDeleteVideo = async (id:string) => {
        await videoService.deleteVideo(id);
        toast.success("video deleted");
        loadVideos();

    }

  
    return (
        <div className="col-md-4">
            <div className="card card-body video-card" 
                style={{cursor: 'pointer'}} 
                
                >
                <div className="d-flex justify-content.between">
                    <h1 onClick={ () => history.push(`/update/${video._id}`)} > {video.title}</h1>
                    <span className="text-danger"
                        onClick={ () => video._id && handleDeleteVideo(video._id) }>
                        X
                    </span>
                </div>
            
                <p> { video.description} </p>
                <div className="embed-responsive embed-responsive-16y9">
                    <ReactPlayer url={video.url} />
                </div>

            </div>
            
            
        </div>
    );
}

export default VideoItem;