import axios from 'axios'

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
        <button className='btn btn-primary' onClick={fetchPortfolios}>
          Fetch Data
        </button>
      </section>
      {JSON.stringify(portfolios)}
      <section className='pb-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card subtle-shadow no-border'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text fs-2'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className='card-footer no-border'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card subtle-shadow no-border'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text fs-2 '>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className='card-footer no-border'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card subtle-shadow no-border'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text fs-2 '>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className='card-footer no-border'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
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
