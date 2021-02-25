import { RequestHandler } from 'express';
import Video from './video'

export const getVideos: RequestHandler = async (req, res) => {
    const videos = await Video.find();
    res.json(videos);

}


export const createVideo:RequestHandler = async (req, res) => {
    const { title, description, url } = req.body;
    const newVideo = new Video({title, description, url});
    await newVideo.save()
    console.log("video agregado")
    res.json("video guardado")

}

export const getVideo: RequestHandler = async (req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    res.json(video)
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const id = req.params.id;
    await Video.findByIdAndRemove(id);
    res.json({status: "video deleted"});

}

export const updateVideo: RequestHandler = async (req, res) => {
    const id = req.params.id;
    const { title, description, url } = req.body;
    const newVideo = {title, description, url};
    await Video.findByIdAndUpdate(id, newVideo);
    res.json({status:"Video Updated"});

}