const { usuarios } = require('../../data/db');

module.exports = {
    usuarios() {
        return usuarios;
    },
    usuario(_, { id }) {
        return usuarios.filter(u => u.id == id)[0];
    }
}