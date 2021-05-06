import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {

	onSearch(search: string) {
		console.log(search + 'Kap');
	}


	render() {
		return (
			<div className="App ui container" style={{ marginTop: '10px' }}>
				<SearchBar search={this.onSearch}></SearchBar>
			</div>
		  );
	}
}


export default App;
