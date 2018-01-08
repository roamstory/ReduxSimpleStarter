import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyA2XRSnlrRPxG8sgOmFy6J41-czJ4MuZow';  //Youtube API KEY

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos : [], selectedVideo : null };
        this.videoSearch('영국남자')

    }

    videoSearch(term) {
        YTSearch({key : API_KEY, term: term },  (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos : videos});
        });
    }
    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={ this.state.videos } />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));