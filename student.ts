interface Student {
  registerNo: number;
  name: string;
  department: string;
  semester: number;
}

const student: Student = {
  registerNo: 101,
  name: "Priya",
  department: "CSE",
  semester: 3
};

console.log(student);