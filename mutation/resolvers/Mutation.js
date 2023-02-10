const { usuarios, proximoId } = require('../data/db');

module.exports = {
    novoUsuario(_, { nome, email, idade }) {
        const usuario = {
            id: proximoId(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: "ATIVO"
        };
        usuarios.push(usuario);
        return usuario;
    }
}