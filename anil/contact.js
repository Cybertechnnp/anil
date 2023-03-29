const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {name, email, message};

  fetch('contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    alert(result.message);
    form.reset();
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred. Please try again later.');
  });
}
