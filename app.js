fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const container = document.getElementById("card-container");
    container.innerHTML = "";

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
           <h3><i class="fas fa-user icon user"></i> ${user.name}</h3>
           <p><i class="fas fa-envelope icon email"></i> <span>Email : </span> ${user.email}</p>
           <p><i class="fas fa-user-tag icon username"></i> <span>Username : </span> ${user.username}</p>
           <p><i class="fas fa-map-marker-alt icon address"></i> <span>Address :</span> ${user.address.street}, ${user.address.city} - ${user.address.zipcode}</p>
           <p><i class="fas fa-phone icon phone"></i> <span>Phone :</span> ${user.phone}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    document.getElementById("card-container").textContent =
      "Failed to load users.";
    console.error("Error fetching users:", error);
  });
