import express from 'express';
const router = express.Router();
import { getTasks, createTask, getTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/:id', getTask);

export default router;