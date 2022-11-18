// import throttle from "lodash.throttle";

// const form = document.querySelector('.feedback');

// const LOCALSTORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', throttle(onInputForm, 500));
// form.addEventListener('submit', onSubmitForm);
// window.addEventListener('load', updateOutputOnload);

// function onInputForm(e) {
//     e.preventDefailt();
//     const email = form.elements.email.value;
//     const message = form.elements.message.value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
// };

// function updateOutputOnload(e) {
//     e.preventDefailt();
//     const outputTextContent = localStorage.getItem(LOCALSTORAGE_KEY);
//     const outputObjectContent = JSON.parse(outputTextContent) || { email: "", message: "" };
//     const { email, message } = outputObjectContent;
//     form.elements.email.value = email;
//     form.elements.message.value = message;
// };

// function onSubmitForm(e) {
//     e.preventDefailt();
//     const { email, message } = e.currentTarget.elements;
//     console.log({ email: email.value, message: message.value });
//     localStorage.clear();
//     form.reset();
// }

import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  button: document.querySelector('button')

}
const LOCALSTORAGE_KEY = "feedback-form-state";
const formDate = {};

texteriaMessage(formDate);
refs.form.addEventListener('submit', onButtonClick);
refs.form.addEventListener('input', onInputClick);
refs.email.addEventListener('input', throttle(onEmail, 500));
refs.message.addEventListener('input', throttle(onMessage, 500));

function onButtonClick(e) {
e.preventDefault();
if (refs.email.value === "" || refs.message.value  === "") {
  alert('всі поля повинні бути заповнені!');
} else {
  localStorage.removeItem(LOCALSTORAGE_KEY);
  localStorage.removeItem('Email');
  console.log(formDate);
  e.currentTarget.reset();
};
};
function onInputClick(e) {
formDate[e.target.name] = e.target.value;
// console.log(formDate);
}

function onEmail(e) {
const email = JSON.stringify(formDate[e.target.name]);
localStorage.setItem('Email', email);

};

function onMessage(e) {
  const message = JSON.stringify(formDate[e.target.name]);
  localStorage.setItem(LOCALSTORAGE_KEY, message);
  // console.log(message)
};

function texteriaMessage() {
  
 const saveMessage = localStorage.getItem(LOCALSTORAGE_KEY);
 const saveEmail = localStorage.getItem('Email');

 if (saveMessage) {
 refs.message.value = JSON.parse(saveMessage);
 formDate.message = refs.message.value;
 }

 if (saveEmail) {
refs.email.value = JSON.parse(saveEmail);
formDate.email = refs.email.value;
 }
 
}