import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' }

	onSubmit() {
		console.log('Submit');
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onSubmit}>
					<div className="field">
						<label htmlFor="search">Image search</label>
						<input id="search" type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
					</div>
					<button type="submit" className="ui button"></button>
				</form>
			</div>
		)
	}
}

export default SearchBar;