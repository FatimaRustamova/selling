let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("form");
let name = document.querySelector("#name");
let image = document.querySelector("#img");
let desc = document.querySelector("#desc");
let file = document.querySelector("input[type=file]");

fetch(`http://localhost:3000/Selling/${id}`)
.then(res => res.json())
.then(data => {
    name.value = data.name;
    image.src = data.image;
    desc.value =  data.desc;
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
    let obj = {
        image: image.src,
        name: name.value,
        desc: desc.value
    }
    axios.patch(`http://localhost:3000/Selling/${id}`, obj)
    .then(res => {
        window.location = "./index.html"
    })
})
