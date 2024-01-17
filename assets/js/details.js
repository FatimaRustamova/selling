let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/Selling/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML += `
    <div class="wild">
        <div class="image">
            <img src="${data.image}" alt="">
        </div>
        <div class="west">
            <h2>${data.name}</h2>
            <p>${data.desc}</p>
        </div>
    </div>
    `
})