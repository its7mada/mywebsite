function sendMail(){
 let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
    
 }   

 emailjs.send("service_u1x2j2o","template_rvsx1rq",parms).then(alert("Email sent !!"))
}