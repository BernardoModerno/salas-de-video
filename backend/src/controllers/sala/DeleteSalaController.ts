import {Request, Response} from 'express'
import { DeleteSalaService } from '../../services/sala/DeleteSalaService'

class DeleteSalaController{
  async handle(req: Request, res: Response){
    const { id } = req.params;

    const deleteSalaService = new DeleteSalaService();

    const salaId = await deleteSalaService.execute({
      id
    })

    return res.json(salaId);

  }
}

export { DeleteSalaController }