const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const API = require('./resolvers/APIs')

// 2
const resolvers = {
  Query,
  API
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  // typeDefs,
  resolvers,
})


server.start(() => console.log(`Server is running on http://localhost:4000`))