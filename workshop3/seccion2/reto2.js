let grades = [];

function add() {
    const input = prompt("Ingresa las notas de 0 a 100 separadas por coma: ");
    const array = input.split(",").map(init => parseInt(init));
    grades = array;
    return array;
}

function average(grades) {
    const sumGRades = grades.reduce((total, number) => total + number, 0);
    const averageGrade = sumGRades / grades.length;
    alert(`El promedio de las notas ingresadas es ${averageGrade}`);
}

function maxGrade() {
    const max = Math.max(...grades);
    alert(`El número máximo de las notas es ${max}`);
    return max;
}

function minGRade() {
    const min = Math.min(...grades);
    alert(`El número mínimo de las notas es ${min}`);
    return min;
}

function approved() {
    const approvedGrades = grades.filter(num => num >= 70);
    alert(`Las notas aprobadas son ${approvedGrades}`);
    return approvedGrades;
}

function disapproved() {
    const disapprovedGrades = grades.filter(num => num < 70);
    alert(`Las notas desaprobadas son ${disapprovedGrades}`);
    return disapprovedGrades;
}

function order() {
    const sortedGrades = [...grades].sort((a, b) => b - a);
    alert(`Notas ordenadas de mayor a menor: ${sortedGrades}`);
    return sortedGrades;
}

let init = true;

while (init) {
    const option = prompt("Estas son las funciones de la aplicación: \n 0: agregar \n 1: promedio\n 2: nota máxima \n 3: nota mínima\n 4: aprobados\n 5: desaprobados \n 6: mayor a menor");
    switch (option) {
        case "0":
            add();
            break;
        case "1":
            average(grades);
            break;
        case "2":
            maxGrade();
            break;
        case "3":
            minGRade();
            break;
        case "4":
            approved();
            break;
        case "5":
            disapproved();
            break;
        case "6":
            order();
            break;
        case "7":
            break
        default:
            alert("Opción no válida");

    }

    let moveOn = confirm("¿Quieres realizar otra acción?");
    init = moveOn;
}
