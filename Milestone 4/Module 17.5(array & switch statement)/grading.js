function calcGrade (marks){
    let gradePoint;
    switch(true){
        case(marks <= 100 && marks >= 90):
            gradePoint = "A";
            break;
        case(marks <= 89 && marks >= 80):
            gradePoint = "B";
            break;
        case(marks <= 79 && marks >= 70):
            gradePoint = "C";
            break;
        case(marks <= 69 && marks >= 60):
            gradePoint = "D";
            break;
        case(marks <= 59 && marks >= 50):
            gradePoint = "E";
            break;
        case(marks <= 49 && marks >= 0):
            gradePoint = "F";
            break;
        case(marks <= 100 && marks <= 0):
            gradePoint = "invalid input";
            break;
        default:
            gradePoint = "invalid input";
            break;
    }
    return `You got ${gradePoint} grade`
}
const firstPerson = calcGrade(68);
console.log(firstPerson);