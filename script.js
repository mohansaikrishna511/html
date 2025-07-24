
   document.addEventListener('DOMContentLoaded', () => {
      const user = sessionStorage.getItem('username');
        if (!user) {
            window.location.href = 'form.html';
        }
   document.getElementById('submitBtn').addEventListener('click', () => {

   const form = document.getElementById('loginForm');
   const user = form.username.value.trim();
   const pass = form.password.value.trim();
   const name = user.split('@')[0];

   if (user === 'mohanciet511@gmail.com' && pass === 'mohan') {

      sessionStorage.setItem('username', user);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('date', form.date.value);
      sessionStorage.setItem('number', form.number.value);

      window.location.href = 'index.html';
   } else {
      document.getElementById('error').textContent = 'Invalid credentials!';
   }
  });
 });
  function logout() {
   console.log("Logout function called");
   sessionStorage.clear();
   console.log("Session cleared");
   window.location.href = 'form.html';
   return false;
  }


