import React,{ Component } from "react";
import ImageShower from "./ImagerShower";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash"

class App extends Component {
    state = { images:[] };
    onSubmitTheForm = async (searchForItem) => {
        const response = await unsplash.get("/search/photos",{
                params:{ query:searchForItem }
        })
        this.setState({images : response.data.results})
    }
    render() {
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSubmitTheForm} what="alksdjf"/>
                Found: {this.state.images.length} images
                <ImageShower image={this.state.images}/>
            </div>

        )
    }
}

export default App;