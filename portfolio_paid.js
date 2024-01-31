
function sendEmail(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let Subject = document.getElementById("Subject").value;
let message = document.getElementById("message").value;
// smtp.js marketing host the username and password are found.
Email.send({
    To : 'aryanb.tech098@gmail.com',
    From : "aryanb.tech098@gmail.com",
    Subject : "hello",
    Body : "Name: " + name + "<br/> User Email: " + email + "<br/> Contact Number: " + phone +"<br/>Subject: " + Subject +"<br/>User Message: " + message
}).then(
  message => alert(message)
);
}

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
  navBar = document.querySelector("#navbar");
   navBar.classList.toggle("active");
}

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
})
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
})
}

function openLink() {
  // Replace 'your_link_here' with the actual link you want to open
  // window.location.href = '';
  window.open('https://github.com/AryanGupta741', '_blank');
}

