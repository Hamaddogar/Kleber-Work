function submitForm(event){
    event.preventDefault()
    var push_in_array=[];

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value
    var car = document.getElementById("cars").value;

    var push_in_object={fname, lname, email, gender, car}
    push_in_array.push(push_in_object)

    localStorage.setItem("Data", JSON.stringify(push_in_array))
}