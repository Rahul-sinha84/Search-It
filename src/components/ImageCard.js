import React,{Component} from "react";

class ImageCard extends Component {

    state = {span:null};

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load",this.setSpan);
    }

    setSpan = ()=>{
        var height = Math.ceil( this.imageRef.current.clientHeight / 20 );
        this.setState({span:height}); 
    }

    render() {
        let { description,urls } = this.props.image;
        return(
            <img ref={this.imageRef} src={urls.regular} alt={description} style={{"gridRowEnd":`span ${this.state.span}`}} />
        )
    }
}

export default ImageCard; 