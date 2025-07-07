import express from 'express';
import dotenv from 'dotenv/config';


const app = express();
const port = 3000;




app.use(express.json());

// GET: listar eventos
app.get('/', async (req, res) => {
    res.status(200).json({"hola":"aa"});
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
  });