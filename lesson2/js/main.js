function setUpdate(){
    let today = new Date();
    let update = "Last update: " + today.getMonth()+ "/" + today.getDate() + "/" + today.getFullYear() ;
    let hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    update += " " + hour;
    document.getElementById('update').innerHTML = update;
}