import express from "express"
import database from "../database.js";

const router = express.Router();

router.post('/create', (req, res) => {
    const query = 'INSERT INTO users (name, email, password) values (?, ?, ?)';
    database.query(query, [req.user], (err) => {
        if(err){
            console.error('Erro ao adicionar usuario: ', err);
            return res.status(500).json({message: 'Erro ao adicionar usuário'});
        }
        res.status(200).json({message: 'Usuario adicionado com sucesso'});
    })
})

export default router;