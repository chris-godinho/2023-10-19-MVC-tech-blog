const commentTextBox = document.getElementById('comment-text');
const submitButton = document.getElementById('comment-submit-button');
const commentForm = document.getElementById('comment-form');

submitButton.addEventListener('click', function (event) {
  if (!commentTextBox.value) {
    event.preventDefault();
    alert('Warning: Please fill out all fields.');
  } else {
    commentForm.submit();
    console.log('Form submitted.');
  }
});