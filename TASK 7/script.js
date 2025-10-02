const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

// Fetch and display data
async function fetchUsers() {
    userContainer.innerHTML = "<p>Loading users...</p>";

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data: " + response.status);
        }

        let users = await response.json();

        // Clear previous data
        userContainer.innerHTML = "";

        // Loop through users
        users.forEach(user => {
            let card = document.createElement("div");
            card.classList.add("user-card");

            card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;

            userContainer.appendChild(card);
        });

    } catch (error) {
        userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// Event listener for reload button
reloadBtn.addEventListener("click", fetchUsers);

// Fetch data on page load
fetchUsers();
