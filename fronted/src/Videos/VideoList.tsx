import React, { useEffect , useState} from 'react';
import  * as videoService from './VideoService'
import Video from './VideoInterface'

import VideoItem from './VideoItem'

const VideoList = () => {

    const [listVideo, setListVideo] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos();
        const dataOrder = res.data.map( video => {
            return {
                ...video,
                createAt: video.createAt ? new Date(video.createAt): new Date(),
                updateAt: video.updateAt ? new Date(video.updateAt): new Date()
            }
        })
        .sort( (a,b) => b.createAt.getTime() - a.createAt.getTime());
        setListVideo(dataOrder);
    }

    useEffect( ()=> {
        loadVideos()

    }, [])
    return (
        <div className="row">
            {
                listVideo.map( (video) => (
                    <VideoItem video={video}  key={video._id} loadVideos={loadVideos} />


                ))
            }

        </div>
    );
}

export default VideoList;