

    var email=document.getElementById("Email").value;
    var password=document.getElementById("Password").value;
var rePassword=document.myform.Rpass;
var fName=document.myform.Fname;
var lName=document.myform.Lname;
var gender=document.myform.gender;
var country=document.myform.country;
var check=document.myform.check;
  localStorage.setItem('usermail',email);
 localStorage.setItem('userpassword',password);
 function validate(){
var users=[]
  let user={
    email:Email,
    password:password
  }
users.push(user);
//local storage
localStorage.setItem(email,JSON.stringify(user));
localStorage.setItem(password,JSON.stringify(user));

let array=JSON.parse(localStorage.getItem(email));
console.log(array)
let array1=JSON.parse(localStorage.getItem(password));

if(email.value.length<=0){
    alert("email is required");
    email.focus();
    return false;
}
if(password.value<=0){
    alert("password is required");
    password.focus();
    return false;
}
if(rePassword.value!=password.value){
    alert("password is not matching");
    rePassword.focus();
    return false;
}
if(fName.value.length<=0){
    alert("fName is required");
    fName.focus();
    return false;
}
if(lName.value.length<=0){
    alert("lastName is required");
    lName.focus();
    return false;
}
if(gender.value<=0){
    alert("gender is required");
    gender.focus();
    return false;
}
if(country.value=="select country"){
    alert("country is required");
    country.focus();
    return false;
}
else{
    return true;
}

}


