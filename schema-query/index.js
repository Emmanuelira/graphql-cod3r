const { ApolloServer, gql } = require("apollo-server");

const usuarios = [
    { id: 1, nome: "João Silva", email: "joao@gmail.com" },
    { id: 2, nome: "Lucas Veloso", email: "lucas@gmail.com" },
    { id: 3, nome: "Carlos Batista", email: "carlos@gmail.com" }
];

const typeDefs = gql`
    scalar Any

    # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaAtual : String
        horaDate: Any
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: ID): Usuario
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
        },
        numerosMegaSena() {
            return [4, 17, 28, 29, 36, 48];
        },
        usuarios() {
            return usuarios;
        },
        usuario(_, { id }) {
            const array = usuarios.filter(u => u.id == id);
            return array ? array[0] : null;
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