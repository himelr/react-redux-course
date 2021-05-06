import React from 'react';

interface Prop {
	img: any
}

interface State {
	spans: number;
}

class ImageCard extends React.Component<Prop, State> {
	imageRef: React.RefObject<any>

	constructor(props: Prop) {
		super(props);
		this.imageRef = React.createRef();
		this.state = {spans: 0}
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', () => {
			const height = this.imageRef.current.clientHeight;
			const spans = Math.ceil(height / 10);
			this.setState({spans: spans})
		});
	}

	render() {
		const {description, urls} = this.props.img;
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img
					ref={this.imageRef}
					alt={description}
					src={urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;