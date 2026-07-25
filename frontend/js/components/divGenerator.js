export function create_div_category(category_data){
    
    const id = category_data.id;
    const category_name = category_data.title;
    const category_links = category_data.links;
    
    const links_box = document.createElement("div");
    const ul = document.createElement("ul");
    
    links_box.className = "links_box"
    
    links_box.innerHTML = `
        <header>
            <h1>${category_name}</h1>
            <div class="links_box_actions">
                <div class="links_box_actions">
                    <button class="links_edit_button">Editar</button>
                    <button class="links_delete_button">Borrar</button>
                </div>
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
    links_box.dataset.id = id;
        
    return links_box;
}