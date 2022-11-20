import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form')
}
const LOCALSTORAGE_KEY = "feedback-form-state";
const formDate = {};


initForm();
// texteriaMessage(formDate);
refs.form.addEventListener('submit', onButtonClick);
// refs.form.addEventListener('input', onInputClick);
// refs.form.addEventListener('input', throttle(onEmail, 500));
// refs.form.addEventListener('input', throttle(onMessage, 500));

function onButtonClick(e) {
e.preventDefault();
if (refs.form.email.value === "" || refs.form.message.value  === "") {
  alert('всі поля повинні бути заповнені!');
} else {
  const formData = new FormData(refs.form);
  formData.forEach(data => console.log(data));
  
  // localStorage.removeItem(LOCALSTORAGE_KEY);
  // localStorage.removeItem('Email');
  // console.log(formDate);
  // e.currentTarget.reset();
};
};

refs.form.addEventListener('change', evt => {
  formDate[e.target.name] = e.target.value;
  localStorage.setItem('formDate', JSON.stringify(formDate))
});

function initForm() {
  let persistedText = localStorage.getItem(formDate);
  if (persistedText) {
    persistedText = JSON.parse(persistedText);
    console.log(persistedText);
  }
}

// function onInputClick(e) {
// formDate[e.target.name] = e.target.value;
// // console.log(formDate);
// }

// function onEmail(e) {
// const email = JSON.stringify(formDate[e.target.name]);
// localStorage.setItem('Email', email);

// };

// function onMessage(e) {
//   const message = JSON.stringify(formDate[e.target.name]);
//   localStorage.setItem(LOCALSTORAGE_KEY, message);
//   // console.log(message)
// };

// function texteriaMessage() {
  
//  const saveMessage = localStorage.getItem(LOCALSTORAGE_KEY);
//  const saveEmail = localStorage.getItem('Email');

//  if (saveMessage) {
//  refs.form.message.value = JSON.parse(saveMessage);
//  formDate.message = refs.form.message.value;
//  }

//  if (saveEmail) {
// refs.form.email.value = JSON.parse(saveEmail);
// formDate.email = refs.form.email.value;
//  }
 
// }