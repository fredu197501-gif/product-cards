//1) Создал файл.
//3) Сверставаем данный footer, используя семантические теги footer, nav и т.д.
const items = ['Главная', 'Каталог', 'Контакты'];
const listContainer = document.getElementById("footer__list");

listContainer.innerHTML = items.map(item => `<li>${item}</li>`).join('');

//4) К form добавил логику, к email добавил валидацию, если он не заполнен - form не отправляется.
// Выводим консоль лог в виде объекта: { email: 'введенная почта' }
const form = document.querySelector('#email-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  const form = event.target;
  const fomrData = new FormData(form);
  const data = Object.fromEntries(fomrData.entries());

  console.log(data)
})

//5) Создал кнопку "Регистрация" и модальное окно.
const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const overlay = document.querySelector('#overlay');
const modal = document.querySelector('#registrationModal');
const createdOnSpan = document.querySelector('#createdOn');
const registrationForm = document.getElementById('registrationForm')
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const creationDate = new Date();
let user = null;

function validatePasswords() {
  if (password.value === confirmPassword.value) {
    passwordError.textContent = '';
  } else {
    passwordError.textContent = 'Пороли не совподают';
  }
}

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(registrationForm);
  const passwordValue = formData.get('password');
  const confirmPasswordValue = formData.get('confirmPassword');
  const passwordError = document.getElementById('passwordError');

  if (!passwordValue || !confirmPasswordValue) {
    if (passwordError) passwordError.textContent = 'Заполните все поля';
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    if (passwordError) passwordError.textContent = 'Пороли не совподают';
    return;
  }

  if (passwordError) passwordError.textContent = '';

  const userDateObject = Object.fromEntries(formData.entries());
  userDateObject.createdOn = new Date().toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  user = userDateObject;
  console.log('Внешняя переменная user обновлена:', user);
  closeModal();
});

function openModal() {
  overlay.classList.add('modal-showed');
  document.body.classList.add('modal-showed');
}

function closeModal() {
  overlay.classList.remove('modal-showed');
  document.body.classList.remove('modal-showed');
  registrationForm.reset();
  const passwordError = document.getElementById('passwordError');
  if (passwordError) {
    passwordError.textContent = '';
  }
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

