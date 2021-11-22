fetch('art.json').then(response => {
    response.json().then(response =>{
        insert(response.server);
        insert(response.url);
        insert(response.base);
    })

})

function insert(imageJSON){
    
    let imageHTML = new Image();
    imageHTML.src = imageJSON;
    document.querySelector('body').appendChild(imageHTML);

}
