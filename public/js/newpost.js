const subjectTextBox = document.getElementById('newpost-title');
const bodyTextBox = document.getElementById('newpost-textarea');
const submitButton = document.getElementById('newpost-submit-button');
const newPostForm = document.getElementById('newpost-form');

console.log("subjectTextBox:", subjectTextBox);
console.log("bodyTextBox:", bodyTextBox);
console.log("submitButton:", submitButton);
console.log("newPostForm:", newPostForm);

submitButton.addEventListener('click', function (event) {
  console.log('Title:', subjectTextBox.value);
  console.log('Post Text:', bodyTextBox.value);
  if (!subjectTextBox.value || !bodyTextBox.value) {
    event.preventDefault();
    alert('Warning: Please fill out all fields.');
  } else {
    newPostForm.submit();
    console.log('Form submitted.');
  }
});