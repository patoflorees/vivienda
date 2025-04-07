import getStudentsFromDB from '../DB/student';

class StudentController {
  async getAllStudents() {
    return await getStudentsFromDB();
  }
}

export default StudentController;
