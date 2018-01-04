import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyA2XRSnlrRPxG8sgOmFy6J41-czJ4MuZow';  //Youtube API KEY

YTSearch({key : API_KEY, term: 'surfboards'}, function (data) {
    console.log(data);
});

// Create a new component. This component sould produce
// some HTML

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component`s generated HTML and put it
// on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));