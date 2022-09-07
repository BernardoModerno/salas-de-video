import {Request, Response } from 'express'
import { EditSalaService } from '../../services/sala/EditSalaService'

class EditSalaController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    const { name, urlvideo } = req.body;

    const editSalaService = new EditSalaService();

    const sala = await editSalaService.execute({
      id,
      name,
      urlvideo
    })

    return res.json(sala);

  }
}

export { EditSalaController }