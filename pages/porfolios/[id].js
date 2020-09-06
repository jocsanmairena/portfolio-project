// Also referred to as "SSR (Server side rendering)" or "Dynamic Rendering".
// the page HTML is generated on each request

const PortfolioDetail = ({ query }) => {
	// destructuring
	const { id } = query;
	return <h1>I am the Portfolio Detail page with ID: {id}</h1>;
};

PortfolioDetail.getInitialProps = ({ query }) => {
	return { query };
};

export default PortfolioDetail;
