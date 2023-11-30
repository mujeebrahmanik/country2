function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  function mobileno(){
    number=document.getElementById("inp1").value;
    var mobilenum = /^((\\+91-?)|0)?[0-9]{10}$/;
    if(number.match(mobilenum)){
      document.getElementById("demo").style.display="block";
      document.getElementById("demo").style.color="white";
      document.getElementById("demo").innerHTML="  you have registred successfully";
    }
    else{
      document.getElementById("demo").style.display="block";
      document.getElementById("demo").style.color="yellow";
      document.getElementById("demo").innerHTML="  you have entered wrong details !";
    }
  }