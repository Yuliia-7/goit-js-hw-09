let formState = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const emailInput = form.elements.email;
const messageInput = form.elements.message;

const savedValue = localStorage.getItem('feedback-form-state');
if (savedValue) {
  const state = JSON.parse(savedValue);
  formState.email = state.email || '';
  formState.message = state.message || '';

  emailInput.value = formState.email;
  messageInput.value = formState.message;
}

form.addEventListener('input', () => {
  formState.email = emailInput.value.trim();
  formState.message = messageInput.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const isInvalidInput =
    emailInput.value.trim() === '' || messageInput.value.trim() === '';

  if (isInvalidInput) {
    alert('Fill please all fields');
  } else {
    console.log(formState);

    localStorage.removeItem('feedback-form-state');

    form.reset();

    formState = { email: '', message: '' };
  }
});
