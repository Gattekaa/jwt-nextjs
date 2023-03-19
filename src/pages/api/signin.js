// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var jwt = require('jsonwebtoken');
import knex from 'knex';
import knexConfig from '../../../knexfile';
const bcrypt = require('bcrypt');
const db = knex(knexConfig.development);
const dotenv = require("dotenv");
dotenv.config();

function comparePassword(encriptedPassword, password) {
    return bcrypt.compareSync(`${password}`, `${encriptedPassword}`)
}

export default async function handler(req, res,) {
    const { username, password } = req.body
    if (!username || !password) return res.status(400).json({ message: 'Preencha todos os campos!' })

    const responseDB = await db.select('username').from('jwstoken').where({ username: username })
    if (!responseDB.length) return res.status(400).json({ message: 'Usuário ou senha inválidos.' })

    const [encriptedPassword] = await db.select('password').from('jwstoken').where({ username: username })

    const comparedPassword = comparePassword(encriptedPassword.password, password)

    if (!comparedPassword) return res.status(400).json({ message: 'Usuário ou senha inválidos.' })

    const userData = await db.select('username', 'email').from('jwstoken').where({ username: username })

    try{

        const token = jwt.sign({
            user: {
                ...userData
            }
        }, process.env.SECRET)

        res.status(200).send({
            token: token,
            user: {
                ...userData
            }
        })

    }catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Aconteceu um erro no servidor, tente novamente mais tarde!"
        })
    }


    /*  const rawPassword = data.password
     const encriptedPassword = bcrypt.hash(rawPassword, saltRounds)
     console.log(encriptedPassword)
     await db.insert({
         name: data.name,
         username: data.username,
         email: data.email,
         password: await encriptedPassword
     })
         .into('jwstoken').then((data) => {
             res.status(200).json(data)
 
         })
         .catch((err) => {
             res.status(400).json({
                 message: 'Usuário já existente.'
             })
         }) */

}
