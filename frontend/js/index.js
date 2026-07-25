import {create_div_category} from "./components/divGenerator.js"

let datos_ejemplo =[
    {   
        id: 1,
        title: "Ejemplo x",
        links: [
            {name: "NombreLink", url:"example.com"},
            {name: "NombreLink2", url:"example2.com"}
        ]

    }
];

const link_gather_box = document.getElementById("link_gather_box");

const search_input = document.getElementById("search_input");
const search_button = document.getElementById("search_button");
const search_link = document.getElementById("search_link")

let input_text = "";
const base_url = "https://www.google.com/search?q="

//Events
search_button.addEventListener("click", () =>{
    input_text = search_input.value;
    search_link.setAttribute("href", base_url + input_text);
});

//Append link categorys
for (let i in datos_ejemplo){
    
    link_gather_box.appendChild(create_div_category(datos_ejemplo[i]));
}
