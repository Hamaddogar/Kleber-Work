function submitFunction(event){
    event.preventDefault()
    var push_in_array=[];


var first_name=document.getElementById("first_name").value;
var last_name=document.getElementById("last_name").value;
var email=document.getElementById("email").value;

var push_in_object={first_name,last_name,email}
push_in_array.push(push_in_object)

localStorage.setItem("Data", JSON.stringify(push_in_array))

}

