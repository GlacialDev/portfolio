'use strict'

function authorization() {
  const _window = window,
        _document = document,
        button = _document.querySelector('.auth__login'),
        input = [].slice.call(_document.querySelectorAll('.auth__input')),
        inputLabel = [].slice.call(_document.querySelectorAll('.auth__input-label')),
        login = input[0],
        loginLabel = inputLabel[0],
        password = input[1],
        passwordLabel = inputLabel[1],
        checkbox = _document.querySelector('.auth__checkbox'),
        checkboxLabel = _document.querySelector('.auth__check'),
        radio = [].slice.call(_document.querySelectorAll('.auth__radio')),
        radioLabel = _document.querySelector('.auth__radio-container');

  // создать ошибку
  const createError = (place, text) => {
    removeLastError();
    let errorMsg = _document.createElement('div');
    errorMsg.classList.add('auth__error');
    errorMsg.innerHTML= text;
    place.appendChild(errorMsg);
  }
  
  // удалить предыдущую ошибку, если такая была
  const removeLastError = () => {
    let errorMsg = _document.querySelector('.auth__error');
    if (errorMsg) errorMsg.remove();
  }

  // попытка авторизации
  const auth = e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    // запрашиваем с сервера файл с логином/паролем админа
    xhr.open('GET','auth-login.json');
    xhr.send();
    xhr.addEventListener('load', () => {
      const jsonResponse = JSON.parse(xhr.responseText);
      // по очереди проверяем инпут логина, пароля, чекбокс, радиобатоны
      if (jsonResponse.login != login.value) {
        createError(loginLabel, 'Ты не пройдёшь!')
      } else if (jsonResponse.password != password.value) {
        createError(passwordLabel, 'Ну пароль то не угадаешь')
      } else if (!checkbox.checked) {
        createError(checkboxLabel, 'Не человек? Закрывай сайт')
      } else if (!radio[0].checked) {
        createError(radioLabel, 'Убедись')
      } else {
        removeLastError();
        console.log('welcome');
      }
    });
  }

  // вешаем слушатель на кнопку авторизации 
  if(button) button.addEventListener('click', auth);

}

export default authorization;