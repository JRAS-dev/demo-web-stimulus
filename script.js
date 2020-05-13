function input(){
    localStorage.setItem('id', input_form.id.value);
    localStorage.setItem('name', input_form.name.value);
    location.href = "./stimulus.html";
}

function output(){
    alert("ID : " + localStorage.getItem('id') + ", Name : " + localStorage.getItem('name'));
}

function countdown(idname){
    var obj = document.getElementById(idname);
    obj.style.color = "#ffffff";
    obj.style.backgroundColor = "#000000";
    obj.style.fontSize = 1000 + "%";
    obj.style.textAlign = "center";
    obj.style.verticalAlign = "middle";
    var i = 0;
    setInterval(function(){
        var counter = 3 - i;
        obj.textContent = counter;
        if (counter < 0) {
            location.href = "./index.html";
        }
        i++;
    }, 1000);
}