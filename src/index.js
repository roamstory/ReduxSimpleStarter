import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';

import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyA2XRSnlrRPxG8sgOmFy6J41-czJ4MuZow';  //Youtube API KEY

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos : [] };

        YTSearch({key : API_KEY, term: 'surfboards'},  (videos) => {
            this.setState({ videos });
            // this.setState({ videos : videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));