let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;

    students.push({name, date});
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((student) => {
        let li = document.createElement("li");
        li.innerText = student.name + " - " + student.date;
        list.appendChild(li);
    });
}

displayStudents();
