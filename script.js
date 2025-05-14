const users = [
  {
    name: "Saloni Mishra",
    email: "saloni@example.com",
    username: "saloni01",
    address: { city: "Sagar", street: "MG Road", zipcode: "470001" },
    phone: "9876543210",
    website: "saloni.dev",
  },
  {
    name: "Aashi Shrivatri",
    email: "aashi@example.com",
    username: "aashi02",
    address: { city: "Sagar", street: "Civil Line", zipcode: "470001" },
    phone: "7894561230",
    website: "aashi.dev",
  },
  {
    name: "Amar Khushwaha",
    email: "amar@example.com",
    username: "amar03",
    address: { city: "Sagar", street: "Main Street", zipcode: "470001" },
    phone: "1234567890",
    website: "amar.dev",
  },
  {
    name: "Aniket Jain",
    email: "aniket@example.com",
    username: "aniket04",
    address: { city: "Sagar", street: "Nehru Ward", zipcode: "470001" },
    phone: "7412589630",
    website: "aniket.dev",
  },
  {
    name: "Riya Rai",
    email: "riya@example.com",
    username: "riya05",
    address: { city: "Sagar", street: "Shivaji Nagar", zipcode: "470001" },
    phone: "8529637410",
    website: "riya.dev",
  },
  {
    name: "Muskan Tiwari",
    email: "muskan@example.com",
    username: "muskan06",
    address: { city: "Sagar", street: "Railway Colony", zipcode: "470001" },
    phone: "9638527410",
    website: "muskan.dev",
  },
  {
    name: "Aastha Jain",
    email: "aastha@example.com",
    username: "aastha07",
    address: { city: "Sagar", street: "Patel Market", zipcode: "470001" },
    phone: "4561237890",
    website: "aastha.dev",
  },
  {
    name: "Sejal Sahu",
    email: "sejal@example.com",
    username: "sejal08",
    address: { city: "Sagar", street: "Rajghat", zipcode: "470001" },
    phone: "3216549870",
    website: "sejal.dev",
  },
];

function displayUsers() {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
           <h3><i class="fas fa-user icon user"></i> ${user.name}</h3>
           <p><i class="fas fa-user-tag icon username"></i> <span>Username:</span> ${user.username}</p>
           <p><i class="fas fa-envelope icon email"></i> <span>Email:</span> ${user.email}</p>
           <p><i class="fas fa-map-marker-alt icon address"></i> <span>Address:</span> ${user.address.street}, ${user.address.city} - ${user.address.zipcode}</p>
           <p><i class="fas fa-phone icon phone"></i> <span>Phone:</span> ${user.phone}</p>
           
         `;

    container.appendChild(card);
  });
}

displayUsers();