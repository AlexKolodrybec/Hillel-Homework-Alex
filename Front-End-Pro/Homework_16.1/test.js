class Student {
    constructor(firstName, lastName, yearOfBirth, grades = []) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
      this.grades = grades;
      this.attendance = new Array(25).fill(null); 
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.yearOfBirth;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((a, b) => a + b, 0);
      return sum / this.grades.length;
    }
  
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log('Attendance array is full.');
      }
    }
  
    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log('Attendance array is full.');
      }
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const presentDays = this.attendance.filter(day => day === true).length;
      const totalDays = this.attendance.filter(day => day !== null).length;
      const attendanceRate = totalDays ? presentDays / totalDays : 0;
  
      if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  const student1 = new Student('Іван', 'Іванов', 2000, [95, 90, 92, 88]);
  const student2 = new Student('Петро', 'Петров', 1999, [85, 87, 90, 78]);
  const student3 = new Student('Марія', 'Марієнко', 2001, [60, 65, 70, 75]);
  
  const students = [student1, student2, student3];

  function updateStudentInfo(student, id) {
    const studentElement = document.getElementById(`student${id}`);
    studentElement.querySelector('.age').textContent = student.getAge();
    studentElement.querySelector('.average-grade').textContent = student.getAverageGrade().toFixed(2);
    studentElement.querySelector('.summary').textContent = student.summary();
  }

  students.forEach((student, index) => {
    updateStudentInfo(student, index + 1);
  });
  
  function markPresent(id) {
    students[id - 1].present();
    updateStudentInfo(students[id - 1], id);
  }
  
  function markAbsent(id) {
    students[id - 1].absent();
    updateStudentInfo(students[id - 1], id);
  }