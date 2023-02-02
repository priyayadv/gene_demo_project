

  function validate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var getEmail =localStorage.getItem('usermail');
    var getPass= localStorage.getItem('userpassword');
    
    if(email==""){
      alert("enter valid Id")
      return false;

    }
    if(password==""){
      alert("enter password")
    }
    
    if(email==getEmail)
    {
      if(password==getPass)
      {
        alert("login succefully")
      }
      else{
        alert("wrong password")
      }
    }
    else{
      alert("invali")
    }
  }






