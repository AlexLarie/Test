$(document).ready(function () {

  $("#form-button-id").click(function (event) {
    $('.contact-form__error_tel').text('');
    $('.contact-form__error_name').text('');
    // читаем значения из input'ов формы обратной связи
    let name = $('#name').val()
    let number = $('#phone').val()

    let hasAnyError = false

    if (name === undefined || name === '') {
      hasAnyError = true
      $('.contact-form__error_name').text('Имя не может быть пустым')
    }

    if (number === undefined || number === '') {
      hasAnyError = true
      $('.contact-form__error_tel').text('Необходимо указать номер для связи');
    }

    if (!hasAnyError) {
      $('.contact-form__error_tel').text('');
      $('.contact-form__error_name').text('');
      sendUserInto({
        name: name,
        number: number
      });
      go (); //код в main.js
      clear(); //код в main.js
    }
  })
})
function sendUserInto(user) {
  console.log(user)
  Email.send({
    Host : "твой sttp сервер",
    Username : "логин sttp",
    Password : "пароль sttp",
    To : "твоя личная почта",
    From : "почта sttp",
    Subject : "New user want to know your pricing",
    Body : `Name: ${user.name}, Phone: ${user.number}`
  }).then(
    message => console.log(message)
  );
}
function go () {
  document.getElementById ('form__name').innerHTML = (document.getElementById ('name').value + ',' + '<br>');
  document.getElementById ('form__ok').style.top = '0px';
};
let formClose = document.getElementById ('form__ok');
formClose.onclick = () => {
  document.getElementById ('form__ok').style.top = '1000px'
};
function clear () {
  document.getElementById ('name').value = '';
  document.getElementById ('phone').value = '';
};
