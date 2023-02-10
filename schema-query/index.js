const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require('graphql-import');

const usuarios = [
    { id: 1, nome: "João Silva", email: "joao@gmail.com", perfil_id: 1 },
    { id: 2, nome: "Lucas Veloso", email: "lucas@gmail.com", perfil_id: 2 },
    { id: 3, nome: "Carlos Batista", email: "carlos@gmail.com", perfil_id: 1 }
];

const perfis = [
    { id: 1, nome: "Comum" },
    { id: 2, nome: "Administrador" }
];

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
        },
        perfis() {
            return perfis;
        },
        perfil(_, { id }) {
            return perfis.filter(p => p.id == id)[0];
        }
    },
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        },
        perfil(usuario) {
            return perfis.filter(p => p.id == usuario.perfil_id)[0];
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
    typeDefs: importSchema('./schema/index.graphql'),
     resolvers
});

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`);
});