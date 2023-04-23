const form = document.querySelector('.form');
const login = document.querySelector('.input_login');
const pass = document.querySelector('.input_password');

// const htmlText = `<label class="rerror_login">заполни</label>;`

form.addEventListener(`submit`, (event) => {
  event.preventDefault();//Не дает обнавлять страницу(Отклчает обработку HTML страницы после отправления формы)
   if (login.value === '') {
        document.getElementById('errorLogin').innerHTML =
            `<label class="error">Введите логин</label>`;           
   } else if (pass.value === '' ) {
    document.getElementById(`errorPass`).innerHTML =
    `<label class="error">Ведите пароль</label>`
   } else if (login.value == 'admin' && pass.value == 'admin') document.location.href = "main.html";
        else document.getElementById(`errorSignIn`).innerHTML =
    `<label class="error error_sign_in">'Не верный логин или пароль. Вход запрещен!</label>`;
            // alert ('Не верный логин или пароль. Вход запрещен!');        
      },
    // { once: true }  выполняет функцию один раз    
);

window.addEventListener('click', (e) => { //Убираем всплывающие ошибки по клику, но не на кнопку
    const btn_link = document.querySelector('.btn_link');
    if (!btn_link.contains(e.target)) {
     document.getElementById('errorPass').innerHTML = '';
     document.getElementById('errorLogin').innerHTML = '';
     document.getElementById(`errorSignIn`).innerHTML = ''; 
    };
});


document.querySelector('.see_pass').onclick = (e) => {
    const inputPass = document.querySelector('.input_password')
    if (inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type','text');
        e.target.src = "img/eye-solid.svg";     
    } else {
        inputPass.setAttribute('type','password');
        e.target.src= "img/eye-slash-solid.svg";
    };


};

    const imgSee = document.querySelector('.see_pass_img').getAttribute('src');
   if (inputPass.getAttribute('type') === 'password') {
   
   };    



