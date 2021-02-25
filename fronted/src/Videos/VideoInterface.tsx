interface Video {
    title:string;
    url:string;
    description:string;
    updateAt?: string | Date;
    createAt?:string | Date;
    _id?:string;
}

export default Video;