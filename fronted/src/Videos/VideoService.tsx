import axios from 'axios';
import Video from './VideoInterface'

export const getVideos = async () => {
    return await axios.get<Video[]>('http://localhost:4000/videos');
}

export const createVideo = async (video: Video) => {
    return await axios.post('http://localhost:4000/videos', video)
}

export const getVideo = async (id:String) => {
    return await axios.get<Video>(`http://localhost:4000/videos/${id}`);
}

export const updateVideo = async (id:String,video:Video) => {
    return await axios.put(`http://localhost:4000/videos/${id}`, video);
}

export const deleteVideo = async (id:String) => {
    return await axios.delete(`http://localhost:4000/videos/${id}`);
}