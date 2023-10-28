const loginFormHandler = async (event) => {
    console.info("In loginFormHandler");

    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    console.info("In loginFormHandler:", username, password);

    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    }
  };
  
  document
    .getElementById('login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .getElementById('signup-form')
    .addEventListener('submit', signupFormHandler);
  