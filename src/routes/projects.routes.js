import express from 'express';
const router = express.Router();
import {createProject, getProjects, updateProject, deleteProject, getProject, getProjectTasks} from '../controllers/projects.controller.js';


router.get('/project', getProjects);
router.post('/project', createProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);
router.get('/project/:id', getProject);

router.get('/project/:id', getProject);

router.get('/project/:id/tasks', getProjectTasks);


export default router