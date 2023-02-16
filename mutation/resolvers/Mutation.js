const { usuarios, proximoId } = require('../data/db');

module.exports = {
    novoUsuario(_, { dados }) {
        if(usuarios.some(u => u.email === dados.email)) {
            throw new Error('E-mail já cadastrado.');
        } else {
            const usuario = {
                id: proximoId(),
                ...dados,
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
    },
    alterarUsuario(_, args) {
        const index = usuarios.findIndex(u => u.id == args.id);
        if(index < 0) {
            throw new Error('Usuário não encontrado.');
        } else {
            const usuarioAlterado = {
                ...usuarios[index], ...args
            }
            usuarios.splice(index, 1, usuarioAlterado);
            return usuarioAlterado; 
        }
    }
}