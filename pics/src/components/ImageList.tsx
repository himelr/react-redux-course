import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props: {images: any[]}) => {
	return (
		<div className="image-list">
			{props.images.map(img => <ImageCard key={img.id} img={img}></ImageCard>)}
		</div>
	);
}


export default ImageList;