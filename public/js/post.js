const commentTextBox = document.getElementById('comment-text');
const submitButton = document.getElementById('comment-submit-button');
const commentForm = document.getElementById('comment-form');
const deleteButton = document.getElementById('delete-button');

submitButton.addEventListener('click', function (event) {
  if (!commentTextBox.value) {
    event.preventDefault();
    alert('Warning: Please fill out all fields.');
  } else {
    commentForm.submit();
    console.log('Form submitted.');
  }
});

deleteButton.addEventListener('click', function (event) {
  console.log('Delete button clicked.');
  event.preventDefault();
  const deleteConfirmation = confirm('Are you sure you want to delete this post?');
  if (deleteConfirmation) {
    fetch(`/api/blog/post`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in deleting post:', data);
        window.location.replace('/dashboard');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
);