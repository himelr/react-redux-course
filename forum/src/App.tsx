import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Are you sure you want to this?</h4>
				</div>
				</ApprovalCard>
			{getComments(10)}
		</div>
	);
};

function getComments(a: number) {
	let comments:JSX.Element[] = [];
	for (let i = 0; i < a; i++) {
		comments.push(
			<ApprovalCard key={i}>
				<CommentDetail
					key={i}
					author={faker.name.firstName()}
					date={randomDate(new Date(2012, 0, 1), new Date())}
					imageStr={faker.image.avatar()}
				/>
			</ApprovalCard>
		)
	}
	return comments;
}

function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export default App;