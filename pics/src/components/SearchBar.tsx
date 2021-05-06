import React from 'react';


interface Props {
	search: (search: string) => void;
}
class SearchBar extends React.Component<Props> {

	state = { term: 'Hi' }

	onFormSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		this.props.search(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
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