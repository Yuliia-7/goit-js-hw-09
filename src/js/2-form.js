let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const emailInput = form.elements.email;
const messageInput = form.elements.message;

const savedValue = localStorage.getItem('feedback-form-state');
if (savedValue) {
  const stateFeedback = JSON.parse(savedValue);
  formData.email = stateFeedback.email || '';
  formData.message = stateFeedback.message || '';

  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

form.addEventListener('input', () => {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const isInvalidInput =
    emailInput.value.trim() === '' || messageInput.value.trim() === '';

  if (isInvalidInput) {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    form.reset();

    formData = { email: '', message: '' };
  }
});
