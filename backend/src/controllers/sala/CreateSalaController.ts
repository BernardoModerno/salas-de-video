import {Request, Response} from 'express'
import { CreateSalaService } from '../../services/sala/CreateSalaService'

class CreateSalaController{
  async handle(req: Request, res: Response){
    const { name, urlvideo } = req.body;

    const createSalaService = new CreateSalaService();

    const sala = await createSalaService.execute({
      name,
      urlvideo,
    });

    return res.json(sala);

  }
}

export { CreateSalaController }