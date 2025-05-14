fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById('card-container');
    container.innerHTML = '';  // Clear the container before adding new cards

    users.forEach((user, index) => {
      const card = document.createElement('div');
      card.className = `card ${index % 2 === 0 ? 'left' : 'right'}`;

      card.innerHTML = `
        <h3>👤 ${user.name}</h3>
        <p><span>✉️ Email:</span> ${user.email}</p>
        <p><span>🧑‍💻 Username:</span> ${user.username}</p>
        <p><span>📍 Address:</span> ${user.address.street}, ${user.address.city} - ${user.address.zipcode}</p>
        <p><span>📞 Phone:</span> ${user.phone}</p>
        <p><span>🌐 Website:</span> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('card-container').textContent = 'Failed to load users.';
    console.error('Error fetching users:', error);
  });
