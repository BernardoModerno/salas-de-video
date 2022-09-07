import {Request, Response } from 'express'
import { ListByIdSalaService } from '../../services/sala/ListByIdSalaService'

class ListByIdSalaController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    const { name, urlvideo } = req.body;

    const listByIdSalaService = new ListByIdSalaService();

    const sala = await listByIdSalaService.execute({
      id,
      name,
      urlvideo
    })

    return res.json(sala);

  }
}

export { ListByIdSalaController }