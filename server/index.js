//custom functionality for server side rendering
const express = require('express')
const next = require('next')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const port = parseInt(process.env.PORT, 10) || 3000 //set the port number. 3000 if local environment
const dev = process.env.NODE_ENV !== 'production' //set a dev environment if not equal to production
const app = next({ dev })
const handle = app.getRequestHandler() // reqquest handler

app.prepare().then(() => {
  const server = express() //create express server
  const schema = buildSchema(`
    type Query {
        hello: String 
    }`)
  //name of query and return type
  // root provides a resolver for each API endpoint
  const root = {
    hello: () => {
      return 'Hello World'
    }
  }

  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
      pretty: true
    })
  )
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
