
 ///Fucntion Decaltion
 
 function submitFunction(event){
     event.preventDefault()
      var  push_in_array=[];

    var uname=document.getElementById("uname").value;
    var fname=document.getElementById("fname").value;
    var uemail=document.getElementById("uemail").value;
     var city = document.getElementById("city").value
    var  push_in_object={uname,fname,uemail,city}
     push_in_array.push(push_in_object)
    //    localStorage.setItem("Data",JSON.stringify(push_in_array))
     localStorage.setItem("mydata",JSON.stringify(push_in_array))

      var get_data_localstorge=localStorage.getItem("mydata")
       
      




 }