import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat: number, month: number) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}

const seasonConfig = {
	summer: {text: 'Beachhhh', icon: 'sun'},
	winter: {text: 'Brr its cold', icon: 'snowflake'}
}

const SeasonDisplay = (props: {lat: number}) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, icon } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`${icon} icon massive icon-left`}></i>
			<h1>{text}</h1>
			<i className={`${icon} icon massive icon-right`}></i>
		</div>
	)
}

export default SeasonDisplay;