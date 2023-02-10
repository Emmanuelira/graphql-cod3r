const { usuarios, perfis } = require('../data/db');

module.exports = {
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
        return usuarios.filter(u => u.id == id)[0];
    },
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        return perfis.filter(p => p.id == id)[0];
    }
}