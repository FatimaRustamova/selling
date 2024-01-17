let form = document.querySelector("form");
let name = document.querySelector("#name");
let image = document.querySelector("#img");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");
let table = document.querySelector("table");

fetch("http://localhost:3000/Selling")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.desc}</td>
                <td>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </td>
            </tr>
        `
    })
})



file.addEventListener("input", (e)=> {
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=> {
            image.src = reader.result
        }
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {};
    let reader = new FileReader();
    let src = file.files[0];
    reader.onload = (e)=> {
        obj = {
            image: e.target.result,
            name: name.value,
            desc: desc.value
        }
        axios.post("http://localhost:3000/Selling", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
    reader.readAsDataURL(src);
})


function deleteEl(id) {
    axios.delete(`http://localhost:3000/Selling/${id}`);
    window.location.reload()
}

