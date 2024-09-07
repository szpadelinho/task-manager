const config = require("./config.json")
const user = require("./modules/user")
const task = require("./modules/task")

const currentUser = user.userInfo("Filip", "niepodamswojegomaila@mail.com")
console.log(`Informacje o zalogowanym użytkowniku:\nNazwa użytkownika: ${currentUser.username}\nAdres email: ${currentUser.email}\n---------------------------------------------------------------------`)

task.createTask("Przykładowe zadanie")
task.createTask("Kolejne przykładowe zadanie")

task.finishTask(0)

const tasks = task.getTasks()
console.log("Lista wszystkich zadań:")
tasks.forEach(task => {
    console.log(`ID: ${task.id}, Opis: ${task.desc}, Skończony?: ${task.done}`)
})

setTimeout(() => {console.clear()}, config.showTime)