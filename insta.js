let name = document.querySelector('#name');
let password = document.querySelector('#password');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    let timestamp = new Date().getTime(); // Получаем текущую метку времени
    localStorage.setItem('Логин_' + timestamp, name.value);
    localStorage.setItem('Пароль_' + timestamp, password.value);
});
