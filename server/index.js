//custom functionality for server side rendering
const express = require("express")
const next = require("next")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const port = parseInt(process.env.PORT, 10) || 3000 //set the port number. 3000 if local environment
const dev = process.env.NODE_ENV !== "production" //set a dev environment if not equal to production
const app = next({ dev })
const handle = app.getRequestHandler() // reqquest handler

const { portfolioResolvers } = require("./graphql/resolvers")
const { portfolioTypes } = require("./graphql/types")

app.prepare().then(() => {
	const server = express() //create express server
	// STRUCTURE OF YOU DATA (SCHEMA): Construct a schema, using GRAPHQL schema language

	//schema
	const schema = buildSchema(`                         
    ${portfolioTypes}
      type Query {
        portfolio(id: ID): Portfolio
        portfolios: [Portfolio]
      }
      type Mutation {
        createPortfolio( input: CreatePortfolioInput) : Portfolio
      }
  `)

	// Revolvers
	const resolvers = {
		...portfolioResolvers,
	}
	server.use(
		"/graphql",
		graphqlHTTP({
			schema,
			rootValue: resolvers,
			graphiql: true,
			pretty: true,
		}),
	)
	server.all("*", (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})
