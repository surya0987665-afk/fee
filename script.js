let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("amount").value;
    let due = document.getElementById("due").value;

    students.push({name, phone, amount, due, status:"UNPAID"});
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

function markPaid(index) {
    students[index].status = "PAID";
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("list");
    if(!list) return;

    list.innerHTML = "";
    students.forEach((s, i) => {
        let li = document.createElement("li");
        li.innerHTML = s.name + " - ₹" + s.amount + " - " + s.status +
        " <button onclick='markPaid("+i+")'>Mark Paid</button>";
        list.appendChild(li);
    });
}

function showPaid() {
    let list = document.getElementById("paidList");
    if(!list) return;

    students.forEach(s => {
        if(s.status == "PAID") {
            let li = document.createElement("li");
            li.innerText = s.name + " - ₹" + s.amount;
            list.appendChild(li);
        }
    });
}

function showUnpaid() {
    let list = document.getElementById("unpaidList");
    if(!list) return;

    students.forEach(s => {
        if(s.status == "UNPAID") {
            let li = document.createElement("li");
            li.innerText = s.name + " - ₹" + s.amount;
            list.appendChild(li);
        }
    });
}

function totalIncome() {
    let total = 0;
    students.forEach(s => {
        if(s.status == "PAID") total += Number(s.amount);
    });

    let t = document.getElementById("total");
    if(t) t.innerText = "₹ " + total;
}

displayStudents();
showPaid();
showUnpaid();
totalIncome();
