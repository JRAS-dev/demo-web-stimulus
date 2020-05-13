function input(){
    localStorage.setItem('id', input_form.id.value);
    localStorage.setItem('name', input_form.name.value);
    location.href = "./stimulus.html";
}

function output(){
    alert("ID : " + localStorage.getItem('id') + ", Name : " + localStorage.getItem('name'));
}
