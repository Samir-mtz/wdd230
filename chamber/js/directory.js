const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});
listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});
function getData() {
    fetch("js/data.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            const grid = document.querySelector("article");
            for(let i=0; i<9; i++) {
                let enterprise = document.createElement("section");
                let image = document.createElement("img");
                let name = document.createElement("h3");
                let address = document.createElement("p");
                let number = document.createElement("p");
                let url = document.createElement("a");
                name.innerHTML = jsondata.name[i];
                image.src = jsondata.image[i];
                image.setAttribute("alt", jsondata.name[i]);
                address.innerHTML = jsondata.address[i] + "<br>" + jsondata.state[i];
                number.innerHTML = jsondata.number[i];
                url.innerHTML = "Website";
                url.href = jsondata.url[i];
                enterprise.appendChild(image);
                enterprise.appendChild(name);
                enterprise.appendChild(address);
                enterprise.appendChild(number);
                enterprise.appendChild(url);
                grid.appendChild(enterprise);
            }
        });
}