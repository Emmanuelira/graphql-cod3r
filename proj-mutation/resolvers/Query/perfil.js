const { perfis } = require('../../data/db');

module.exports = {
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        return perfis.filter(p => p.id == id)[0];
    }
}