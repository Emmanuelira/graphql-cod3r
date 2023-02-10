const { perfis } = require('../data/db');

module.exports = {
    perfil(usuario) {
        return perfis.filter(p => p.id == usuario.perfil_id)[0];
    }
};