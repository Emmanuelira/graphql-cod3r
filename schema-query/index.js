const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
    scalar Any

    # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaAtual : String
        horaDate: Any
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
    }

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
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
        },
        produtoEmDestaque() {
            return {
                nome: "Desodorante",
                preco: 10,
                desconto: 0.15
            }
        }
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        }
    },
    Produto: {
        precoComDesconto(produto) {
            return produto.desconto ?
                produto.preco * (1 - produto.desconto) :
                produto.preco;
        }
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
});