console.log("from login.js");
var btn=document.getElementById("sub-btn");
btn.addEventListener("click",abc);
function abc(e)
{
e.preventDefault();

var email=document.getElemnetById("inputEmail").value;
var pass=document.getElement("inputPassword").value;
console.log(email,pass);
}