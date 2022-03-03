function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat
        }
    }


    let students = []
    for (let index = 0; index < numbersOfStudents + 1; index++) {
        students.push(studentSeat(index+1));    
    }
    return students;
}
let classRoom = createClassRoom(10);
