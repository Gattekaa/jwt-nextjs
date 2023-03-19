// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from 'knex';
import knexConfig from '../../../knexfile';
const bcrypt = require('bcrypt');
const db = knex(knexConfig.development);

function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12))
}

export default async function handler(req, res) {
  const {name, username, email, password, password_confirm} = req.body

  if (!name || !username || !email || !password || !password || !password_confirm) return res.status(400).json({ message: 'Preencha todos os campos!' })

  if (password !== password_confirm) return res.status(400).json({message: 'As duas senhas precisam ser iguais!'})
  const encriptedPassword = generateHash(password)
  
  await db.insert({
    name,
    username,
    email,
    password: encriptedPassword
  })
  .into('jwstoken').then((data) => {
    res.status(200).json({message: "Usuário cadastrado com sucesso!"})

  })
  .catch((err) => {
    res.status(400).json({
      message: 'Usuário já existente.'
    })
  })

}
