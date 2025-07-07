import EventsRepository from '../repositories/EventsRepository.js';

export default class EventsService {
  getAllAsync = async () => {
    const repo = new EventsRepository();
    const returnArray = await repo.getAllAsync();
    return returnArray;
  }
  
  getByIdAsync = async (id) =>     { /* hacerlo */ }
  createAsync  = async (entity) => { /* hacerlo */ }
  updateAsync  = async (entity) => { /* hacerlo */ }
  deleteByIdAsync = async (id) =>  { /* hacerlo */ }
}
