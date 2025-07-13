function setFixedUser() {
  const fixedUsername = 'Khalidabayo';
  const fixedToken = 'Lacicoya02#';

  // Store fixed values in localStorage if not already set
  if (!localStorage.getItem('username')) {
    localStorage.setItem('username', fixedUsername);
  }
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', fixedToken);
  }

  return {
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token'),
  };
}

// Usage
const user = setFixedUser();
console.log('Username:', user.username);
console.log('Token:', user.token);