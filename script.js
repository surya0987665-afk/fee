let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudent() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;
    let due = document.getElementById("due").value;
    let editIndex = document.getElementById("editIndex").value;

    if (editIndex === "") {
        students.push({name, phone, amount, due, status:"UNPAID"});
    } else {
        students[editIndex] = {name, phone, amount, due, status: students[editIndex].status};
        document.getElementById("editIndex").value = "";
    }

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function editStudent(index) {
    let s = students[index];
    document.getElementById("name").value = s.name;
    document.getElementById("phone").value = s.phone;
    document.getElementById("amount").value = s.amount;
    document.getElementById("due").value = s.due;
    document.getElementById("editIndex").value = index;
}

function markPaid(index) {
    students[index].status = "PAID";
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("list");
    if(!list) return;

    list.innerHTML = "";
    students.forEach((s, i) => {
        let li = document.createElement("li");
        li.innerHTML = s.name + " | ₹" + s.amount + " | " + s.status +
        " <button onclick='editStudent("+i+")'>Edit</button>" +
        " <button onclick='markPaid("+i+")'>Paid</button>" +
        " <button onclick='deleteStudent("+i+")'>Delete</button>";
        list.appendChild(li);
    });
}

displayStudents();
