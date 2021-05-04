const CommentDetail = (props: {author: string, date?: Date, imageStr: string}) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.imageStr} />
			</a>
			<div className="content">
				<a href="/" className="author" >
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.date?.toDateString()}</span>
				</div>
				<div className="text">Nice blog post!</div>
			</div>
		</div>
	)
}
export default CommentDetail;