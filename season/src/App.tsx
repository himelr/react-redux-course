import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component<{}, {lat: number, errorMsg: string}> {

	state = { lat: 0, errorMsg: '' };

	render() {
		return (
			<div className="border red">
				{ this.renderContent() }
			</div>
			)
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
			},
			(error) => this.setState({ errorMsg: error.message })
		);
	}

	renderContent() {
		if (!this.state.errorMsg && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
		} else if (this.state.errorMsg && !this.state.lat) {
			return <div>Error: {this.state.errorMsg}</div>
		}
		return <Spinner msg='Waiting latitude'></Spinner>;
	}
}

export default App;
