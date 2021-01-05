import axios from 'axios'
import { PortfolioCard } from '../../components/shared/portfolios/PortfolioCard'

//making a axios request to retrive portfolios data using graphql
const fetchPortfolios = () => {
  const query = `
    query Porfolios {
        portfolios {
            _id
            title
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
    .then(({ data: graph }) => {
      //destructurize data as graph (data.data.portfolios to graph.data.portfolios )
      return graph.data.portfolios
    })
}

const Portfolios = ({ portfolios }) => {
  //destructurized portfolios from pageProps
  return (
    <>
      <section className='section-title'>
        <div className='px-2'>
          <div className='pt-5 pb-4'>
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <div className='row'>
          {portfolios.map(portfolio => (
            <div key={portfolio._id} className='col-md-4'>
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
  console.log('PORTFOLIOS getInitialProps')
  const portfolios = await fetchPortfolios()
  return { portfolios } //return portfolios as properties to our page
}

export default Portfolios
