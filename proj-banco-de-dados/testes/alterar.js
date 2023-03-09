const db = require('../config/db')

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@empresa.com.br',
    senha: '12345678'
}

async function exercicio() {
    const { qtde } = await db('usuarios').count('* as qtde').first();
    if(qtde === 0) await db.insert(novoUsuario).into('usuarios');
    let { id } = await db('usuarios').select('id').first();
    await db.update({ nome: 'Pedro Garcia', email: 'pg@empresa.com.br' })
        .from('usuarios')
        .where({ id });
    return await db('usuarios').where({ id });
}

exercicio()
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())