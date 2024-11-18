import express from "express"
import database from "../database.js";
import bcrypt from "bcrypt"

const router = express.Router();

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlready = "SELECT * FROM users WHERE email = ?";
    database.query(isUserAlready, [email], async (err, results) => {
        if(err) return res.status(500).json({message: 'Erro ao verificar se usuario existe'})
        if(results.length > 0){
            return res.status(400).json({message: 'Usuario ja existe'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const query = 'INSERT INTO users (name, email, password) values (?, ?, ?)';
        database.query(query, [name, email, hashedPassword], (err) => {
            if(err){
                console.error('Erro ao adicionar usuario: ', err);
                return res.status(500).json({message: 'Erro ao adicionar usuário'});
            }
            res.status(200).json({message: 'Usuario cadastrado com sucesso'});
        })
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    //checar se o usuario existe
    const isUserReal = "SELECT * FROM users WHERE email = ?";
    database.query(isUserReal, [email], async (err, results) => {
        if(err) return res.status(500).json({message: 'Erro ao verificar se usuario existe'})
        if(results.length > 0){
            //checar se a senha é valida
            const user = results[0]
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid) return res.status(400).json({message: "Senha invalida"})
            return res.status(200).json({message: "Logado com sucesso"})
        }
    })
})

router.put('/:id', (req, res) => {
    const {userId} = req.params;
    const { weight, height } = req.body;
    const query = 'UPDATE users SET weight = ?, height = ? WHERE id = ?'
    database.query(query, [weight, height, userId], (err) => {
        if(err){
            console.error("Erro ao atualizar usuario: ", err)
            return res.status(500).json({message: "Erro ao atualizar usuario"})
        }
        res.status(200).json({message: 'Usuario atualizado com sucesso'});
    })
})

export default router;