let id = 1;
function proximoId() {
    return id++;
}

const usuarios = [
    { 
        id: proximoId(), 
        nome: "João Silva", 
        email: "joao@gmail.com", 
        perfil_id: 1,
        status: "ATIVO"
    },
    { 
        id: proximoId(), 
        nome: "Lucas Veloso", 
        email: "lucas@gmail.com", 
        perfil_id: 2,
        status: "INATIVO"
    },
    { 
        id: proximoId(), 
        nome: "Carlos Batista", 
        email: "carlos@gmail.com",
        perfil_id: 1,
        status: "BLOQUEADO" 
    }
];

const perfis = [
    { id: 1, nome: "Comum" },
    { id: 2, nome: "Administrador" }
];

module.exports = { usuarios, perfis, proximoId };