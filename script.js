class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    }

    function introduceStudent() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const student = new Student(name, age);

    document.getElementById('output').innerText = student.introduce();
    }