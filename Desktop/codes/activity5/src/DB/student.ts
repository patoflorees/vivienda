interface Student {
    id: string;
    name: string;
    grade: number;
    hasDebts: boolean;
  }
  
  const students: Student[] = [
    { id: 'A101', name: 'Emma Johnson', grade: 87, hasDebts: false },
    { id: 'A102', name: 'Liam Smith', grade: 91, hasDebts: true },
    { id: 'A103', name: 'Olivia Brown', grade: 76, hasDebts: false },
    { id: 'A104', name: 'Noah Davis', grade: 84, hasDebts: false },
    { id: 'A105', name: 'Ava Wilson', grade: 58, hasDebts: true },
    { id: 'A106', name: 'Elijah Taylor', grade: 93, hasDebts: false },
    { id: 'A107', name: 'Sophia Anderson', grade: 65, hasDebts: true },
    { id: 'A108', name: 'James Thomas', grade: 79, hasDebts: false },
    { id: 'A109', name: 'Isabella Moore', grade: 96, hasDebts: false },
    { id: 'A110', name: 'Benjamin Jackson', grade: 72, hasDebts: true },
    { id: 'A111', name: 'Mia White', grade: 69, hasDebts: false },
    { id: 'A112', name: 'Lucas Harris', grade: 83, hasDebts: true },
    { id: 'A113', name: 'Charlotte Martin', grade: 90, hasDebts: false },
    { id: 'A114', name: 'Henry Thompson', grade: 49, hasDebts: true },
    { id: 'A115', name: 'Amelia Garcia', grade: 88, hasDebts: false },
  ];
  
  export default async function getStudentsFromDB(): Promise<Student[]> {
    return students;
  }
  