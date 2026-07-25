function CategoryForm(){
    let form = document.createElement("form");
    let titleLabel = document.createElement("label");
    let titleInput = document.createElement("input");
    let button = document.createElement("button");

    form.className = "form-box";

    titleLabel.innerText = "Title";
    titleLabel.for = "title";

    titleInput.name = "title";
    titleInput.id = "title";

    button.innerText = "submit";
    button.type = "submit";

    form.append(titleLabel, titleInput, button);

    return form
}

export default CategoryForm;