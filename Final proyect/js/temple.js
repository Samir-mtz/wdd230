function loadinformation(id){
    fetch("js/temples.json")
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        let title = document.querySelector("#templename");
        let phoneN = document.querySelector("#temple-phone");
        let adressT = document.querySelector("#adress");
        let div = document.querySelector("#milestones");
        let mile = document.createElement("h3");
        let image = document.querySelector("#temple-img");
        image.src = jsondata.image[id];
        title.innerHTML = jsondata.name[id];
        adressT.innerHTML = jsondata.address[id];
        phoneN = "Telephone: " + jsondata.phone[id];
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        mile.innerHTML= "MILESTONES";
        div.appendChild(mile)
        jsondata.milestones[id].forEach(element => {
            let milestonesinfo = document.createElement("p");
            milestonesinfo.innerHTML = element;
            div.appendChild(milestonesinfo)
        });
        // console.log(id);
});
}
function showTemple(id){
    loadinformation(id);
    let templeDiv = document.querySelector(".descriptionTemple")
    templeDiv.style = "display: flex;";
    document.getElementById("temple-description").scrollIntoView();
}
function hideTemple(){
    let templeDiv = document.querySelector(".descriptionTemple")
    templeDiv.style = "display: none";
}