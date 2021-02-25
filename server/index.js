//custom functionality for server side rendering
const express = require( "express" )
const next = require( "next" )

const { ApolloServer, gql } = require( 'apollo-server-express' )

const port = parseInt( process.env.PORT, 10 ) || 3000 //set the port number. 3000 if local environment
const dev = process.env.NODE_ENV !== "production" //set a dev environment if not equal to production
const app = next( { dev } )
const handle = app.getRequestHandler() // reqquest handler

const { portfolioQueries, portfolioMutations } = require( "./graphql/resolvers" )
const { portfolioTypes } = require( "./graphql/types" )

app.prepare().then( () => {
  const server = express() //create express server
  // STRUCTURE OF YOU DATA (SCHEMA): Construct a schema, using GRAPHQL schema language


  const typeDefs = gql( `                         
    ${portfolioTypes}
      type Query {
        portfolio(id: ID): Portfolio
        portfolios: [Portfolio]
      }
      
      type Mutation {
        createPortfolio( input: PortfolioInput ) : Portfolio
        updatePortfolio( id: ID, input: PortfolioInput ) : Portfolio
      }
  `)

  // Revolvers
  const resolvers = {
    Query: {
      ...portfolioQueries
    },
    Mutation: {
      ...portfolioMutations
    }
  }

  const apolloServer = new ApolloServer( { typeDefs, resolvers } )
  apolloServer.applyMiddleware( { app: server } )


  server.all( "*", ( req, res ) => {
    return handle( req, res )
  } )

  server.listen( port, ( err ) => {
    if ( err ) throw err
    console.log( `> Ready on http://localhost:${port}` )
  } )
} )
