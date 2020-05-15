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
        if (counter < 0) {
            obj.textContent = "";
            location.href = "./stimulus.html";
        }
        obj.textContent = counter;
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

function getColorSet() {
    var array = [["赤", "#ff0000"], ["緑", "#00ff00"], ["青", "#0000ff"]];
    // Fisher–Yates shuffle
    for(var i = array.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }
    return array;
}

function runStimulus(idname, btn0, btn1, btn2) {
    var obj = document.getElementById(idname);
    obj.style.backgroundColor = "#000000";

    let text_color = getColorSet();

    // テキストの色を決める
    obj.style.color = text_color[0][1];
    obj.style.fontSize = 1000 + "%";
    obj.style.textAlign = "center";
    obj.style.verticalAlign = "middle";

    // テキストを決める
    obj.textContent = text_color[1][0];

    // ボタンの色を決める
    let btn_color = getColorSet();
    document.getElementById(btn0).style.background = btn_color[0][1];
    document.getElementById(btn1).style.background = btn_color[1][1];
    document.getElementById(btn2).style.background = btn_color[2][1];
}
