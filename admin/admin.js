function log(){
  var user="admin"
  var pass="admin"
  var userentry=document.getElementById("user").value;
  var passentry=document.getElementById("pass").value;
  if(user==userentry&&pass==passentry){
    alert("login sucessfully");
   "window.location.href = 'https://github.com/alexkp98/photography/upload/master/gallery'"
  }
  else
  {
    alert("please check your username and password");
  }
}