const {ApolloServer,gql} = require("apollo-server-fastify")
const books = [
    {
        name:"book",
        id: 1
    },
    {
        name:"lever",
        id: 2
    },
    {
        name:"mena",
        id: 3
    }
]
exports.resolvers = {
  Query: {
    getBooks: async()=>{
        return books;
    }
  },
};

exports.typeDefs = gql`
  type books{
      name: String!
      id: Int!
  }
  type Query{
      getBooks: books
  }
`;
