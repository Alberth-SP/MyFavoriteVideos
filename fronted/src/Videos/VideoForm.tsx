import React , {ChangeEvent, FormEvent, useDebugValue, useState , useEffect} from 'react';
import Video from './VideoInterface'
import * as videoService from './VideoService'
import { toast } from 'react-toastify'
import { useHistory, useParams} from 'react-router-dom'
interface Params {
    id:string;
}
const VideoForm = () => {
    const history = useHistory();
    const params:Params = useParams();
    const initialVideo = {title:'', description:'', url:''}
    const [ video, setVideo] = useState<Video>(initialVideo);

    const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setVideo({...video,[e.target.name]:e.target.value});
    }

    const getVideo  = async(id: string) => {
        const res =  await videoService.getVideo(id);
        const { title, description, url } = res.data;
        setVideo({
            title,
            description,
            url
            
        });
    }

    useEffect( () => {
        if(params.id){
            getVideo(params.id);
          
        }

    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(params.id){
            await videoService.updateVideo(params.id, video);
            toast.success("Video updated");
            setVideo(initialVideo);

        } else {
            const res = await videoService.createVideo(video);
            toast.success("Video added");
            setVideo(initialVideo);

        }
        
        history.push('/');
    }


    return (
        <div className="row" >
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <h3>New VIdeo</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="title" 
                                    placeholder="Ingrese un Titulo"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={video.title}
                                    autoFocus
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="url" 
                                    placeholder="http://somesite.com"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={video.url}
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    name="description" 
                                    rows={3}
                                    placeholder="Ingrese una descripcion"
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={video.description}
                                ></textarea>
                            </div>
                            {
                                params.id ? 
                                    <button
                                    className="btn btn-primary">
                                        Update Video

                                    </button> 
                                :
                                <button
                                className="btn btn-primary">
                                    Create Video

                                </button>
                            }
                            
                            

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default VideoForm;