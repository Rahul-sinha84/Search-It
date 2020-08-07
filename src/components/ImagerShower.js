import React,{ Component } from "react";
import ImageCard from "./ImageCard";
import "../styles/ImageShower.css";

class ImageShower extends Component {
    render() {
        const imagesLists = this.props.image.map((image)=>(
            <ImageCard image={image} key={image.id} />
        ))
        return(
            <div className="img-container">
                {imagesLists}
            </div>
        )
    }
}

export default ImageShower;