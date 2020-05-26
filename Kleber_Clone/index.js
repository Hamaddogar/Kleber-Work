function form1(event){
event.preventDefault()
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var city = document.getElementById('city').value;
var gender = document.querySelector('input[name="gender"]:checked').value;

var details = {fname, lname, city, gender}
var myArray=[]
myArray.push(details)

localStorage.setItem('data',JSON.stringify(myArray));

console.log(myArray);
}


function form2(event){
    event.preventDefault()
    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    var loginDetails = {userName, passWord}
    var pwdArray=[]
    pwdArray.push(loginDetails)

    console.log(pwdArray);

}

  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });