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

import EventsController from './controllers/EventsController'
// GET: listar eventos
app.get('/', async (req, res) => {
    res.status(200).json({"hola":"aa"});
});

app.use('/api/event', EventsController);

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
  });