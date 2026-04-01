function checkReminders(){
    let today = new Date();

    students.forEach(s=>{
        if(s.status=="UNPAID"){
            let due = new Date(s.due);
            let diff = (due - today)/(1000*60*60*24);

            if(diff <= 2 && diff >= 0){
                let msg = "Hello " + s.name + 
                ", your fee of ₹" + s.amount + 
                " is due on " + s.due;

                let url = "https://wa.me/" + s.phone + 
                "?text=" + encodeURIComponent(msg);

                window.open(url);
            }
        }
    });
}
