function LinkForm(id){
    let form = document.createElement("form");
    let titleLabel = document.createElement("label");
    let titleInput = document.createElement("input");
    let urlLabel = document.createElement("label");
    let urlInput = document.createElement("input");
    let button = document.createElement("button");

    form.className = "form-box";

    titleLabel.innerText = "Title";
    titleLabel.for = "title";

    titleInput.name = "title";
    titleInput.id = "title";

    urlLabel.innerText = "URL";
    urlLabel.for = "url";

    urlInput.name = "url";
    urlInput.id = "url";

    button.innerText = "submit";
    button.type = "submit";

    form.append(titleLabel, titleInput, urlLabel, urlInput, button);

    return form
}
export default LinkForm;