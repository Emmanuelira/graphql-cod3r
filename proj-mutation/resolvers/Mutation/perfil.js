const { perfis, proximoIdPerfil } = require('../../data/db');

function indicePerfil(filtro) {
    const { id, nome } = filtro;
    if(id) {
        return perfis.findIndex(p => p.id == id);
    } else if(nome) {
        return perfis.findIndex(p => p.nome === nome);
    } else {
        return -1;
    }
}

module.exports = {
    novoPerfil(_, { dados }) {
        if(perfis.some(perfil => perfil.nome === dados.nome)) {
            throw new Error("Perfil já cadastrado.");
        } else {
            const perfil = { id: proximoIdPerfil(), ...dados };
            perfis.push(perfil);
            return perfil;
        }
    },
    excluirPerfil(_, { filtro }) {
        const index = indicePerfil(filtro);
        if(index < 0) {
            throw new Error("Perfil não encontrado.");
        } else {
            return perfis.splice(index, 1)[0];
        }
    },
    alterarPerfil(_, { filtro, dados }) {
        const index = indicePerfil(filtro);
        if(index < 0) {
            throw new Error("Perfil não encontrado.");
        } else {
            if(perfis.some(perfil => perfil.nome === dados.nome)) {
                throw new Error("Nome de perfil já existente.");
            }
            const perfil = { ...perfis[index], ...dados };
            perfis.splice(index, 1, perfil);
            return perfil;
        }
    }
};