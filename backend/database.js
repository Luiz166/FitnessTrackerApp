import mysql from "mysql2"
import 'dotenv/config';

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

conn.connect((err) => {
    if(err){
        console.error('Erro ao conectar à database:', err);
        return
    }
    console.log('Conectado à database');
})

export default conn