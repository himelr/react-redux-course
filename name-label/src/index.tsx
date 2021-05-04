// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

function getButtonText() {
	return { text: 'Click' }
}

export const App = () => {
	return (
		<div>
			<label className="label" htmlFor="name">Enter name</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText().text}</button>
		</div>
	);
};


//Create a react componen


//Take the react component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);