
const items = document.getElementsByClassName('blogs-items');
    for(const item of items){
        item.style.display = 'none';
    }


//discover Something New 
document.getElementById("discover-something")
    .addEventListener('click', function(){
        toggleHandle("blogs-items", 'block')
        toggleHandle("home-items", 'none')
    })

document.getElementById("btn-back-to-desk")
    .addEventListener("click", function(){
        toggleHandle("blogs-items", 'none')
        toggleHandle("home-items", 'flex')
    })

//toggle function
function toggleHandle (itemsClass, status ){
    const items = document.getElementsByClassName(itemsClass);
    for(const item of items){
        item.style.display = status;
    }
}
