// 5)Создал класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//I. Для получения всех значений формы.
//II. Для проверки валидности формы
//III. Для сброса значений формы

export class Form {
  constructor(formId, username, fullname, birthdate, email, password, confirmPassword) {
    this.form = document.getElementById(formId);
    this.username = username;
    this.fullname = fullname;
    this.birthdate = birthdate;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  getFormValues() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    return data;
  }

  validateForm() {
    const formData = this.getFormValues();
    const errors = {};
  }

  resetForm() {
    this.form.reset();
  }

  validatePasswords() {
    if (this.password.value === this.confirmPassword.value) {
      return true;
    } else {
      return false;
    }
  }
}

export class EmailForm {
  constructor(emailformId, emailId, emailPassword) {
    this.form = document.getElementById(emailformId);
    this.email = emailId;
    this.emailPassword = emailPassword;
  }
  get formData() {
    return new FormData(this.form);
  }
  consoleLogEmail() {
    const data = this.formData;
    const emailValue = data.get(this.email);
    const emailPasswordValue = data.get(this.emailPassword);
    console.log({ email: emailValue, password: emailPasswordValue });
  }
}

const emailForm = new EmailForm('email-form', 'email', 'password');

emailForm.form.addEventListener('submit', (event) => {
  event.preventDefault();
  emailForm.consoleLogEmail();
  emailForm.form.reset();
})


const registrationForm = new Form('registrationForm', 'username', 'fullname', 'birthdate', 'email', 'password', 'confirmPassword');
const passwordError = document.getElementById('passwordError');
const creationDate = new Date();
const user = null;
const registrationFormElement = document.getElementById('registrationForm');
const createdOnSpan = document.querySelector('#createdOn');

registrationFormElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(registrationFormElement);
  const passwordValue = formData.get('password');
  const confirmPasswordValue = formData.get('confirmPassword');
  if (!passwordValue || !confirmPasswordValue) {
    if (passwordError) passwordError.textContent = 'Заполните все поля';
    return;
  }
  if (passwordValue !== confirmPasswordValue) {
    if (passwordError) passwordError.textContent = 'Пароли не совпадают';
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
  console.log(userDateObject);
  createdOnSpan.textContent = userDateObject.createdOn;
  registrationFormElement.reset();
})