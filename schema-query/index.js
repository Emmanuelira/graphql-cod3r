const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
    scalar Any

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaAtual : String
        horaDate: Any
        usuarioLogado: Usuario
    }
`;
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        }
    },
    Query: {
        ola() {
            return 'string qualquer';
        }, 
        horaAtual () {
            return new Date().toString();
        },
        horaDate () {
            return new Date();
        },
        usuarioLogado() {
            return {
                id: 524, 
                nome: "João da Silva",
                email: "joao@gmail.com",
                idade: 52,
                salario_real: 7414.41,
                vip: true
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
});