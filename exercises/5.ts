/*
    Przepisz podany niżej typ `Person` tak, aby funkcja `exam` działała poprawnie. i nie zwracała błędów.
*/

type Person = {
    type: 'student' | 'teacher';
    takeExam?: () => void;
    prepareExam?: () => void;
}

const exam = (person: Person) => {
    if (person.type === 'student') {
        person.takeExam();
    } else {
        person.prepareExam();
    }
}