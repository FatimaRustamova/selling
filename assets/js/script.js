//--Data/--//
let selling = document.querySelector(".selling");
let search = document.querySelector("input[type=search]");
let arr_1 = [];
let arr_2 = [];

function getAllData () {
    fetch("http://localhost:3000/Selling")
    .then(res => res.json())
    .then(data => {
        arr_2 = data;
        selling.innerHTML = "";
        arr_1 = arr_1.length || search.value ? arr_1 : data;
        arr_1.forEach(element => {
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

//--View Details--//
function viewDetails(id) {
    window.location = `./details.html?id=${id}`
}

//--Search--//
search.addEventListener("input", (e)=> {
    arr_1 = arr_2;
    arr_1 = arr_1.filter((el)=> {
        return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    });
    getAllData();
})

//--Sort--//
let sort = document.querySelector("#sort")
let sorted = "descending";

sort.addEventListener("click", ()=> {
    if(sorted == "ascending"){
        arr_1 = arr_1.sort((a,b)=> a.name.localeCompare(b.name))
        sorted = "descending";
        sort.innerHTML = "SORT ASC";
    }
    else if(sorted == "descending"){
        arr_1 = arr_1.sort((a,b)=> b.name.localeCompare(a.name))
        sorted = "default";
        sort.innerHTML = "SORT DSC";
    }
    else{
        arr_1 = arr_2;
        sorted = "ascending";
        sort.innerHTML = "SORT"
    }
    getAllData();
})