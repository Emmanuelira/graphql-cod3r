const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    const usuario = await db.select('*').from('usuarios').where({ email }).first();
    
    if(usuario) await db.update({ nome, senha }).from('usuarios').where({ email });
    else await db.insert({ nome, email, senha }).into('usuarios');
     
    return await db.select('*').from('usuarios').where({ email }).first();
}

async function salvarPerfil(nome, rotulo) {
    const perfil = await db.select('*').from('perfis').where({ nome }).first();
    
    if(perfil) await db.update({ rotulo }).from('perfis').where({ nome });
    else await db.insert({ nome, rotulo }).into('perfis');
     
    return await db.select('*').from('perfis').where({ nome }).first();
}

async function adicionarPerfis(usuario, ...perfis) {
    for(let perfil of perfis) {
        const data = await db.select('*').from('usuarios_perfis')
            .where({ usuario_id: usuario.id, perfil_id: perfil.id })
            .first();

        if(!data) await db.insert({ usuario_id: usuario.id, perfil_id: perfil.id })
            .into('usuarios_perfis');
    }
}

async function executar() {
    const usuario = await salvarUsuario('Ana', 'ana@empresa.com.br', '123456');
    const perfilA = await salvarPerfil('rh', 'Pessoal');
    const perfilB = await salvarPerfil('fin', 'Financeiro');

    console.log(usuario);
    console.log(perfilA);
    console.log(perfilB);

    await adicionarPerfis(usuario, perfilA, perfilB);
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy());