const students = ["Rebecca", "Jimmy", "Kate"];

for (let i=0; i<3; i++) {
    const newStudent = prompt("Enter a new student's name:");
    students.push(newStudent);
};

for (let i=0; i<students.length; i++) {
    console.log(students[i]);
};