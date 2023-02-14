const { usuarios, proximoId } = require('../data/db');

module.exports = {
    novoUsuario(_, args) {
        if(usuarios.some(u => u.email === args.email)) {
            throw new Error('E-mail já cadastrado.');
        } else {
            const usuario = {
                id: proximoId(),
                ...args,
                perfil_id: 1,
                status: "ATIVO"
            };
            usuarios.push(usuario);
            return usuario;
        }
    },
    excluirUsuario(_, { id }) {
        const index = usuarios.findIndex(u => u.id == id);
        if(index < 0) {
            throw new Error('Usuário não encontrado.');
        } else {
            return usuarios.splice(index, 1)[0]; 
        }
    }
}