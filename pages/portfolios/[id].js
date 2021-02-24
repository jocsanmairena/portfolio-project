import axios from "axios"

export const PortfolioDetail = ({ portfolio }) => {
	return (
		<div className="portfolio-detail">
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-3">{portfolio.title}</h1>
					<p className="lead">{portfolio.jobTitle}</p>
					<p>
						<a className="btn btn-lg btn-success" href={portfolio.companyWebsite} role="button">
							See Company
						</a>
					</p>
				</div>

				<div className="row marketing">
					<div className="col-lg-6">
						<h4 className="title">Location</h4>
						<p className="text">{portfolio.location}</p>

						<h4 className="title">Start Date</h4>
						<p className="text">{portfolio.startDate}</p>
					</div>

					<div className="col-lg-6">
						{/* TODO: days later... */}
						<h4 className="title">Days</h4>
						<p className="text">44</p>

						<h4 className="title">End Date</h4>
						<p className="text">{portfolio.endDate}</p>
					</div>
					<div className="col-md-12">
						<hr />
						<h4 className="title">Description</h4>
						<p>{portfolio.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

/* 
From where are we getting this query object. It comes from context.query.
Read more at https://flaviocopes.com/nextjs-getinitialprops/
and
https://medium.com/@griko/exploring-undocumented-getinitialprops-properties-on-next-js-1265a6abc652
 */
PortfolioDetail.getInitialProps = async ({ query }) => {
	console.log("GET INITIAL PROPS BY ID")
	debugger
	const portfolio = await fetchPortfolioById(query.id)
	return { portfolio }
}

const fetchPortfolioById = async (id) => {
	const query = `
    query Portfoli( $id: ID) {
      portfolio (id: $id) {
        _id,
        title,
        company,
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`

	// for id : id, first id refers to the portfolio( id .
	// for id : id, second id refers to fetchPortfolioById = async (id) argument.
	// in others words, ( id variable : id input by client)
	// const variables = { id: id }
	const variables = { id }
	const res = await axios.post("http://localhost:3000/graphql", { query, variables })
	return res.data.data.portfolio
}

export default PortfolioDetail
