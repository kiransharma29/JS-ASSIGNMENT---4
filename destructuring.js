const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using Javascript"
    }
}

//destructuring 

const {name, age , projects} = student;
console.log(name, age, projects)