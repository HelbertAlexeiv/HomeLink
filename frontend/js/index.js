let search_input = document.getElementById("search_input");
let search_button = document.getElementById("search_button");
let search_link = document.getElementById("search_link")

let input_text = "";
const base_url = "https://www.google.com/search?q="

search_button.addEventListener("click", () =>{
    console.log("Hello")
    input_text = search_input.value;
    search_link.setAttribute("href", base_url + input_text)
})