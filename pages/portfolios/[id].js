// Also referred to as "SSR (Server side rendering)" or "Dynamic Rendering".
// the page HTML is generated on each request

// gets query as a prop.
const PortfolioDetail = ({ query }) => {
  // destructuring id: similar to "const id = query.id"
  const { id } = query
  return <h1>I am the Portfolio Detail page with ID: {id}</h1>
}

// Extracts the 'query' values to the PortfolioDetail component as initial values
// getInitialProps gets call on the server
PortfolioDetail.getInitialProps = ({ query }) => {
  return { query }
}

export default PortfolioDetail
