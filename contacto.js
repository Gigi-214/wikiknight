document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const eName = document.getElementById('errorName');
  const eEmail = document.getElementById('errorEmail');
  const eMessage = document.getElementById('errorMessage');
  const success = document.getElementById('formSuccess');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const setError = (el, errEl, msg) => {
    errEl.textContent = msg;
    el.setAttribute('aria-invalid', 'true');
  };
  const clearError = (el, errEl) => {
    errEl.textContent = '';
    el.removeAttribute('aria-invalid');
  };

  const validateName = () => {
    const val = name.value.trim();
    if (!val) return setError(name, eName, 'El nombre es requerido.'), false;
    if (val.length < 2) return setError(name, eName, 'Mínimo 2 caracteres.'), false;
    clearError(name, eName); return true;
  };
  const validateEmail = () => {
    const val = email.value.trim();
    if (!val) return setError(email, eEmail, 'El email es requerido.'), false;
    if (!emailRegex.test(val)) return setError(email, eEmail, 'Formato de email inválido.'), false;
    clearError(email, eEmail); return true;
  };
  const validateMessage = () => {
    const val = message.value.trim();
    if (!val) return setError(message, eMessage, 'El mensaje es requerido.'), false;
    if (val.length < 10) return setError(message, eMessage, 'Mínimo 10 caracteres.'), false;
    if (val.length > 300) return setError(message, eMessage, 'Máximo 300 caracteres.'), false;
    clearError(message, eMessage); return true;
  };

  // Validación en blur para feedback rápido
  name.addEventListener('blur', validateName);
  email.addEventListener('blur', validateEmail);
  message.addEventListener('blur', validateMessage);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = [validateName(), validateEmail(), validateMessage()].every(Boolean);
    if (!ok) return;

    // Captura de datos (simulación local)
    const data = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
      ts: new Date().toISOString()
    };
    console.log('Formulario enviado:', data);

    success.classList.remove('is-hidden');
    form.reset();
    setTimeout(() => success.classList.add('is-hidden'), 4000);
  });

  form.addEventListener('reset', () => {
    [name, email, message].forEach((el, i) => {
      const errEl = [eName, eEmail, eMessage][i];
      clearError(el, errEl);
    });
    success.classList.add('is-hidden');
  });
});
