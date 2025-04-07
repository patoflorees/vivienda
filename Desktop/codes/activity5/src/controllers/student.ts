import express from 'express';
import StudentHttpHandler from '../handlers/student';

const router = express.Router();
const studentHttpHandler = new StudentHttpHandler();

router.get('/', studentHttpHandler.getStudents);

export default router;
