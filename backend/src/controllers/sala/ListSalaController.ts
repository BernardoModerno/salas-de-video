import {Request, Response} from 'express'
import { ListSalaService } from '../../services/sala/ListSalaService'

class ListSalaController{
  async handle(req: Request, res: Response){
    const listSalaService = new ListSalaService();

    const sala = await listSalaService.execute();

    return res.json(sala);

  }
}

export { ListSalaController }