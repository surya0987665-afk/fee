let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;
    let duedate = document.getElementById("duedate").value;
    let paiddate = document.getElementById("paiddate").value;

    let status = paiddate ? "PAID" : "PENDING";

    students.push({name, phone, amount, duedate, paiddate, status});
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    calculateIncome();
}

function displayStudents() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach((s, index) => {
        let li = document.createElement("li");
        li.innerHTML = s.name + " - ₹" + s.amount + " - " + s.status +
        " <button onclick='sendReminder(" + index + ")'>Reminder</button>";
        list.appendChild(li);
    });
}

function calculateIncome() {
    let total = 0;
    students.forEach(s => {
        if (s.status === "PAID") {
            total += Number(s.amount);
        }
    });
    document.getElementById("income").innerText = "₹ " + total;
}

function sendReminder(index) {
    let s = students[index];
    let msg = "Hello " + s.name + ", Your fee of ₹" + s.amount + " is due on " + s.duedate;

    let url = "https://wa.me/" + s.phone + "?text=" + encodeURIComponent(msg);
    window.open(url);
}

displayStudents();
calculateIncome();
