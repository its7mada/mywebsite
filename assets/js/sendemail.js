function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Check if required fields are empty
  if (!params.name || !params.email || !params.message) {
    alert("الرجاء تعبئة جميع الحقول المطلوبة.");
    return;
  }

  const serviceID = "service_u1x2j2o";
  const templateID = "template_rvsx1rq";
  const modal = document.getElementById('success-modal');
  const contactForm = document.getElementById('contact-form');

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Show the success modal
      if (modal) {
        modal.style.display = 'flex';
      }
      // Reset the form fields
      if (contactForm) {
        contactForm.reset();
      }
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      alert("عذراً، حدث خطأ. لم يتم إرسال رسالتك.");
    });
}