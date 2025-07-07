process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import fetch from 'node-fetch';
global.fetch = fetch;

import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();


const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = 3000;




app.use(express.json());

// GET: listar eventos
app.get('/', async (req, res) => {
    res.status(200).json({"hola":"aa"});
});

app.get('/api/event', async (req, res) => {
    const { data: eventsData, error: eventsError } = await supabase.from('events').select('*');
    if(eventsError){
        res.status(400).json({"error": "error al obtener eventos"});
    } else if(eventsData==[]){
        res.status(400).json({"error": "no hay eventos"}); 
    }
    console.log(eventsData);

    res.status(200).json({"hola":"aa"});
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
  });