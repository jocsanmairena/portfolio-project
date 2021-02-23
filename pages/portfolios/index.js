import axios from 'axios'
import { PortfolioCard } from '../../components/shared/portfolios/PortfolioCard'

const Portfolios = ({ portfolios }) => {
  //destructurized portfolios from pageProps.portfolios
  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map((portfolio) => (
            <div key={portfolio._id} className="col-md-4">
              <PortfolioCard portfolio={portfolio} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

// getInitalProps for Portfolios Component
Portfolios.getInitialProps = async () => {
  console.log('GET INITIAL PROPS PORTFOLIOS')
  const portfolios = await fetchPortfolios()
  return { portfolios } //returns portfolios as properties to our page
}

//making a axios request to retrive portfolios data using graphql
const fetchPortfolios = () => {
  const query = `
    query Portfolios {
      portfolios {
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

  return axios
    .post('http://localhost:3000/graphql', { query })
    .then((res) => res.data.data.portfolios)
  //Another way to do it.
  // .then(({ data: graph }) => graph.data)
  // .then(data => data.portfolios)
}

export default Portfolios
