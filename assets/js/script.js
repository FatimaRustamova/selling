let selling = document.querySelector(".selling");

function getAllData () {
    fetch("http://localhost:3000/Selling")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            selling.innerHTML += `
                <div class="wild">
                    <div class="image">
                        <img src="${element.image}" alt="">
                    </div>
                    <div class="west">
                        <h2>${element.name}</h2>
                        <p>${element.desc}</p>
                        <button onclick="viewDetails(${element.id})">View Details</button>
                    </div>
                </div>
            `
        })
    })
}

getAllData();

function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}