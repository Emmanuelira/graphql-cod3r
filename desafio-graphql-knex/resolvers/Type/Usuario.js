const db = require('../../config/db')

module.exports = {
    async perfis(usuario) {
        return await db('perfis')
            .innerJoin('usuarios_perfis', function() {
                this
                    .on('perfis.id', '=', 'usuarios_perfis.perfil_id')
                    .andOn('usuarios_perfis.usuario_id', '=', usuario.id)
            });
    }
}