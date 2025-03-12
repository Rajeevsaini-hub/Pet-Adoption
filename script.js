// document.addEventListener("DOMContentLoaded", function () {
//     alert("Welcome to Pet Adoption! Find your perfect companion.");
// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const pet = document.getElementById("pet").value;

        if (name && email && pet) {
            alert(`Thank you, ${name}! We will contact you soon about adopting ${pet}.`);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
