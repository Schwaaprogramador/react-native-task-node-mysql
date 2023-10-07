import {Router} from 'express';
import { getTasks } from '../controllers/task2';

const router = Router();

//TODAS LAS TAREAS
router.get('/tasks', getTasks)
//
router.get('/tasks/count')

//UNICA TAREA [ID]
router.get('/tasks/:id')


//Crear una tarea.
router.post('/tasks')

//Borrar una tarea

//Modificar una tarea
export default router