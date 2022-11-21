import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form')
}

const formDate = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

(function () {
  if (localStorage.getItem(LOCALSTORAGE_KEY, JSON.stringify(formDate))) {
    let localEmail = localStorage.getItem(LOCALSTORAGE_KEY);
    localEmail = JSON.parse(localEmail);
    refs.form.email.value = localEmail.email;
    refs.form.message.value = localEmail.message;
    console.log(localEmail);
  }
}) ();

refs.form.addEventListener('submit', onButtonClick);
refs.form.addEventListener('input', throttle(onEmail, 500));
refs.form.addEventListener('input', throttle(onMessage, 500));

function onButtonClick(e) {
e.preventDefault();
if (refs.form.email.value === "" || refs.form.message.value  === "") {
  alert('всі поля повинні бути заповнені!');
} else {

  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
};
};

refs.form.addEventListener('change', evt => {
  if (!(refs.form.email.value === "" || refs.form.message.value === "")) {
    formDate[refs.form.email.name] = refs.form.email.value;
    formDate[refs.form.message.name] = refs.form.message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
    console.log(formDate);
  } 
});

function onEmail(e) {
formDate[refs.form.email.name] = refs.form.email.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
};

function onMessage(e) {
  formDate[refs.form.message.name] = refs.form.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDate));
};
