import React, { Component } from 'react';

// 함수형 컴포넌트
// const SearchBar = () => {
//     return <input />;  // React.createElement로 변환되기 때문에
// };


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    //이벤트 핸들러
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;