import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

import { CreateSalaController } from './controllers/sala/CreateSalaController'
import { ListSalaController } from './controllers/sala/ListSalaController'

import { EditSalaController } from './controllers/sala/EditSalaController';

import { isAuthenticated } from './middlewares/isAuthenticated'

import { ListByIdSalaController } from './controllers/sala/ListByIdSalaController';
import { DeleteSalaController } from './controllers/sala/DeleteSalaController';


const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

//-- ROTAS CATEGORY
router.post('/sala', isAuthenticated, new CreateSalaController().handle )

router.delete('/sala/:id', isAuthenticated, new DeleteSalaController().handle )

router.get('/sala', isAuthenticated, new ListSalaController().handle )

router.get('/sala/:id', isAuthenticated, new ListByIdSalaController().handle ) 

router.put('/sala/:id', isAuthenticated, new EditSalaController().handle ) 




export { router }; 