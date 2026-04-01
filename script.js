function viewProfile(index) {
    localStorage.setItem("profileIndex", index);
    window.location = "profile.html";
}

function loadProfile() {
    let index = localStorage.getItem("profileIndex");
    if(index == null) return;

    let s = students[index];
    let p = document.getElementById("profile");
    if(p){
        p.innerHTML =
        "Name: " + s.name + "<br>" +
        "Phone: " + s.phone + "<br>" +
        "Fee: ₹" + s.amount + "<br>" +
        "Due Date: " + s.due + "<br>" +
        "Status: " + s.status;
    }
}

loadProfile();
