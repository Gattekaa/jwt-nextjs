var jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

export default async function handler(req, res) {
    const secret = process.env.SECRET
    console.log('a')
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1]

        if (!token) return res.status(400)
        const data = jwt.verify(token, secret)
        return res.status(200).send(data)
    } catch(err) {
        console.log(err)
        return res.status(401).send({ message: 'expired' })
    }
    //console.log(data)

}
