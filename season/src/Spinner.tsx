import React from 'react';

const Spinner = (props: {msg?: string}) => {

	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.msg}</div>
		</div>
	)
}

Spinner.defaultProps = {
	msg: 'Loading....'
}

export default Spinner;