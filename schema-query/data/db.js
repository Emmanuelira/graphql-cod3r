const usuarios = [
    { id: 1, nome: "João Silva", email: "joao@gmail.com", perfil_id: 1 },
    { id: 2, nome: "Lucas Veloso", email: "lucas@gmail.com", perfil_id: 2 },
    { id: 3, nome: "Carlos Batista", email: "carlos@gmail.com", perfil_id: 1 }
];

const perfis = [
    { id: 1, nome: "Comum" },
    { id: 2, nome: "Administrador" }
];

module.exports = { usuarios, perfis };