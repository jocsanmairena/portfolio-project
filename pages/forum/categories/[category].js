import NavBar from '@/components/shared/NavBar';

const Topics = () => {
	return (
		<React.Fragment>
			<NavBar />
			<div className="container">
				<section className="section-title">
					<div className="px-2">
						<div className="pt-5 pb-4">
							<h1>Specific Category</h1>
						</div>
					</div>
				</section>
				<section className="fj-topic-list">
					<table className="table table-hover ">
						<thead>
							<tr>
								<th scope="col">Topic</th>
								<th scope="col">Category</th>
								<th scope="col">Author</th>
								<th scope="col">Replies</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Some Topic Info</th>
								<td className="category">General Discussion</td>
								<td>Jocsan Mairena</td>
								<td>2</td>
							</tr>
							<tr>
								<th>Some Topic Info</th>
								<td className="category">General Discussion</td>
								<td>Jocsan Mairena</td>
								<td>2</td>
							</tr>
							<tr>
								<th>Some Topic Info</th>
								<td className="category">General Discussion</td>
								<td>Jocsan Mairena</td>
								<td>2</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</React.Fragment>
	);
};

export default Topics;