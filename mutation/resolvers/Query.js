const { usuarios, perfis } = require('../data/db');

module.exports = {
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