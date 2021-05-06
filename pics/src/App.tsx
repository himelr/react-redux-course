import React from 'react';
import axios from 'axios';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './components/SearchBar';

interface State {
	images?: [];
}
class App extends React.Component<{}, State> {

	constructor(props: any) {
		super(props);
		this.state = {
			images: []
		}
	}

	onSearch = (search: string) => {
		axios.get('https://api.unsplash.com/search/photos', {
			params: {
				query: 	search
			}, headers: {
				Authorization: 'Client-ID fYUCmbtGzHdLudI41CLgZdnnnpbwFpeAch3btpJjeus'
			}
		}).then(res => this.setState({ images: res.data.results }));
	}

	render() {
		return (
			<div className="App ui container" style={{ marginTop: '10px' }}>
				<SearchBar search={this.onSearch}></SearchBar>
				Found: {this.state.images?.length} images
			</div>
		  );
	}
}


export default App;
