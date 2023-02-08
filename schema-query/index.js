const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
    scalar Any

    # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaAtual : String
        horaDate: Any
    }
`;
const resolvers = {
    Query: {
        ola() {
            return 'string qualquer';
        }, 
        horaAtual () {
            return new Date().toString();
        },
        horaDate () {
            return new Date();
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
});