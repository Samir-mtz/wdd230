function getMenu(){
    let b = document.querySelector('body');
    let selector = document.querySelector('#cell');
    selector.style= "display: block; position: absolute; z-index: 2;";
    b.style="overflow: hidden";
}
function hideMenu(){
    let b = document.querySelector('body');
    let selector = document.querySelector('#cell');
    selector.style= "display: none";
    b.style="overflow: scroll";
}
function setUpdate(){
    //Banner 
    let day= new Date().getDay();
    if(day === 1 || day === 2){
        let message = document.getElementById('message');
        message.style.display = "block";
    }
    //Date
    let now = new Date().toLocaleDateString('en-uk', { weekday:"long", month:"long", day:"numeric", year:"numeric"});
    document.getElementById('now').innerHTML = now;
    let today = new Date();
    let update = "Last update: " + today.getMonth()+ "/" + today.getDate() + "/" + today.getFullYear() ;
    let hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    update += " " + hour;
    document.getElementById('update').innerHTML += " " + update;
    
}