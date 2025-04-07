import { Request, Response, NextFunction } from 'express';
import StudentController from '../controllers/student';

const studentController = new StudentController();

class StudentHttpHandler {
  async getStudents(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await studentController.getAllStudents();
      res.json(students);
    } catch (error) {
      next(error);
    }
  }
}

export default StudentHttpHandler;
