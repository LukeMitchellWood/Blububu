(function ContactForm() {
  const contactform = document.querySelector('#contact-form');
  const [name, email, message, submit] = [
    contactform[0],
    contactform[1],
    contactform[2],
    contactform[3],
  ];

  let nameValid = false;
  let emailValid = false;
  let messageValid = false;

  submit.disabled = true;
  name.value = '';
  email.value = '';
  message.value = '';

  document.addEventListener('keyup', (e) => {
    const formvalid = !(nameValid && emailValid && messageValid);
    submit.disabled = formvalid;
    console.log({ formvalid });
    console.log({ nameValid, emailValid, messageValid });
  });

  name.addEventListener('keyup', (e) => {
    nameValid = name.validity.valid;
    if (nameValid) {
      name.classList.toggle('border-opacity-0', false);
      name.classList.toggle('border-opacity-100', true);
      return;
    }
    name.classList.toggle('border-opacity-100', false);
    name.classList.toggle('border-opacity-0', true);
  });

  email.addEventListener('keyup', (e) => {
    emailValid = email.validity.valid;
    if (emailValid) {
      email.classList.toggle('border-opacity-0', false);
      email.classList.toggle('border-opacity-100', true);
      return;
    }
    email.classList.toggle('border-opacity-100', false);
    email.classList.toggle('border-opacity-0', true);
  });

  const charcount = document.querySelector('#char-count');

  message.addEventListener('keyup', (e) => {
    const count = e.target.value.length;
    charcount.textContent = `${count} / 500`;
    messageValid = message.validity.valid;
    if (messageValid) {
      message.classList.toggle('border-opacity-0', false);
      message.classList.toggle('border-opacity-100', true);
      return;
    }
    message.classList.toggle('border-opacity-100', false);
    message.classList.toggle('border-opacity-0', true);
  });

  const progress = document.querySelector('#form-sending');
  submit.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      submit.disabled = true;
      submit.classList.toggle('opacity-0', true);
      progress.classList.toggle('opacity-0', false);
      progress.classList.toggle('opacity-100', true);
      contactform.submit();
    },
    { once: true }
  );
})();
