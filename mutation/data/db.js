let idUsuario = 1;
function proximoIdUsuario() {
    return idUsuario++;
}

let idPerfil = 1;
function proximoIdPerfil() {
    return idPerfil++;
}

const usuarios = [
    { 
        id: proximoIdUsuario(), 
        nome: "João Silva", 
        email: "joao@gmail.com", 
        perfil_id: 1,
        status: "ATIVO"
    },
    { 
        id: proximoIdUsuario(), 
        nome: "Lucas Veloso", 
        email: "lucas@gmail.com", 
        perfil_id: 2,
        status: "INATIVO"
    },
    { 
        id: proximoIdUsuario(), 
        nome: "Carlos Batista", 
        email: "carlos@gmail.com",
        perfil_id: 1,
        status: "BLOQUEADO" 
    }
];

const perfis = [
    { id: proximoIdPerfil(), nome: "Comum" },
    { id: proximoIdPerfil(), nome: "Administrador" }
];

module.exports = { usuarios, perfis, proximoIdUsuario, proximoIdPerfil };