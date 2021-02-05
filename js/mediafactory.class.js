class MediaFactory{
    build(type) {
        if (type == image){
            return new image
        }
        if (type == video){
            return new video
        }
    }
}