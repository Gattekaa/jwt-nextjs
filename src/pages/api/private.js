// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import knex from 'knex';
import knexConfig from '../../../knexfile';
const db = knex(knexConfig.development);
var jwt = require('jsonwebtoken');


function checkToken(handler) {
    return async (req, res) => {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1]
        
        if (!token) {
            return res.status(401).json({
                message: "Acesso negado."
            })
        }

        try {
            const secret = process.env.SECRET
            jwt.verify(token, secret)
            await handler(req, res);

        }catch(err) {
            res.status(400).json({
                message: 'Token inválido.'
            })
        }


    }

}

async function handler(req, res, next) {


    const data = await db.select('id', 'name', 'username', 'email', 'created_at', 'updated_at').from('jwstoken')

    return res.status(200).json({
        data
    })

}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default checkToken(handler)
