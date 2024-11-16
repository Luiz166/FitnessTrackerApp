import express from "express"
import userRoute from './routes/user.js';
import 'dotenv/config'
import cors from "cors"

const PORT = process.env.PORT

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})