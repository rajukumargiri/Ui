const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Your JWT authentication endpoint URL
  const jwtAuthUrl = 'https://your-api-server.com/authenticate';

  // Prepare the request body with username and password
  const requestBody = {
    username: username,
    password: password
  };

  fetch(jwtAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Assuming the API returns a token in the response
    const jwtToken = data.token;

    // Store the JWT token in localStorage or a secure cookie for future use
    localStorage.setItem('jwtToken', jwtToken);

    // Redirect to a protected page or perform other actions after successful login
    window.location.href = '/dashboard.html';
  })
  .catch(error => {
    console.error('Error:', error);
    // Display error message on the login page
    alert('Login failed. Please check your credentials and try again.');
  });
});
