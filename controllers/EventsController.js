import {Router} from 'express';
import EventsService from './../services/EventsService.js'
const router = Router();
const svc    = new EventsService();	

router.get('', async (req, res) => {
  let respuesta;
  const returnArray = await svc.getAllAsync();
  if (returnArray != null){
    respuesta = res.status(200).json(returnArray);
  } else {
    respuesta = res.status(500).send(`Error interno.`);
  }
  return respuesta;
});
router.get('/:id', async (req, res) =>    { /* hacerlo */ }),
router.post('', async (req, res) =>       { /* hacerlo */ }),
router.put('', async (req, res) =>        { /* hacerlo */ }),
router.delete('/:id', async (req, res) => { /* hacerlo */ })

export default router;

