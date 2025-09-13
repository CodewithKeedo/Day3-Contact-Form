    //--Get values--
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const charCounter = document.getElementById('charCounter');

    //--Error elements
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');

    function validateForm() {
      let valid = true;

      // Name validation
      if (nameInput.value.trim().length < 2) {
        nameError.textContent = "Name must be at least 2 characters";
        nameInput.style.borderColor = "red";
        valid = false;
      } else {
        nameError.textContent = "";
        nameInput.style.borderColor = "green";
      }

      // Email validation
      if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        emailError.textContent = "Enter a valid email";
        emailInput.style.borderColor = "red";
        valid = false;
      } else {
        emailError.textContent = "";
        emailInput.style.borderColor = "green";
      }

      // Message validation
      if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        messageInput.style.borderColor = "red";
        valid = false;
      } else {
        messageError.textContent = "";
        messageInput.style.borderColor = "green";
      }

      submitBtn.disabled = !valid;
    }

    // Character counter
    messageInput.addEventListener('input', () => {
      charCounter.textContent = `${messageInput.value.length}/500`;
      validateForm();
    });

    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);

    // Submit
    form.addEventListener('submit', e => {
      e.preventDefault();
      formStatus.innerHTML = "<p class='success'>✅ Message sent successfully!</p>";
      form.reset();
      charCounter.textContent = "0/500";
      submitBtn.disabled = true;
      [nameInput, emailInput, messageInput].forEach(el => el.style.borderColor = "#ccc");
    });
