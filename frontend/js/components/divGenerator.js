export function create_div_category(category_data){
    
    let category_name = category_data.title;
    let category_links = category_data.links;
    
    let links_box = document.createElement("div");
    let ul = document.createElement("ul");
    
    links_box.className = "links_box"
    
    links_box.innerHTML = `
        <header>
            <h1>${category_name}</h1>
            <div class="links_box_actions">
                <div class="links_edit_button">Editar</div>
                <div class="links_delete_button">Borrar</div>
            </div>
        </header>
    `

    for (let link of category_links){
        let li = document.createElement("li");
        let a = document.createElement("a");
        
        a.innerText = link.name;
        a.href = link.url;

        li.appendChild(a);

        ul.appendChild(li);
    }

    links_box.appendChild(ul);
        
    return links_box;
}