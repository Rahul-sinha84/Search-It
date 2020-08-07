import React,{Component} from "react";

class SearchBar extends Component {
    
    state = {lat:""}
    onSubmitForm = (event) => {
        event.preventDefault();
        // console.log(this)
        this.props.onSubmit(this.state.lat);
    }
    render() {
        return(
            <div className="ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input 
                            id="search" 
                            type="text" 
                            value={this.state.lat} 
                            placeholder="Type something" 
                            onChange={(e) => this.setState({lat:e.target.value})} 
                        />
                    </div>
                </form>
            </div>
            
        )
    }
}

export default SearchBar;