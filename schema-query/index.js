const { ApolloServer } = require("apollo-server");
const { importSchema } = require('graphql-import');

const schemaPath = './schema/index.graphql';
const resolvers = require('./resolvers/index');

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
});

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
});