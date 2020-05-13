function input(){
    localStorage.setItem('id', input_form.id.value);
    localStorage.setItem('name', input_form.name.value);
    location.href = "./countdown.html";
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
            location.href = "./stimulus.html";
        }
        i++;
    }, 1000);
}

function getColor() {
    min = Math.ceil(0);
    max = Math.floor(3);
    random_num = Math.floor(Math.random() * (max - min)) + min;
    if (random_num == 0) {
        return "#ff0000";
    } else if (random_num == 1) {
        return "#00ff00";
    } else if (random_num == 2) {
        return "#0000ff";
    } else {
        return "#ffffff";
    }
}

function runStimulus(idname) {
    var obj = document.getElementById(idname);
    obj.style.backgroundColor = "#000000";

    let text_color = getColor();
    obj.style.color = text_color;
    obj.style.fontSize = 1000 + "%";
    obj.style.textAlign = "center";
    obj.style.verticalAlign = "middle";
    let text_meaning_color = getColor();
    if (text_meaning_color == "#ff0000") {
        obj.textContent = "赤";
    } else if (text_meaning_color == "#00ff00") {
        obj.textContent = "緑";
    } else if (text_meaning_color == "#0000ff") {
        obj.textContent = "青";
    } else {
        obj.textContent = "Error"
    }
}
