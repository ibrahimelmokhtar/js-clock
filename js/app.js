
function updateValues(){
    // create Date() object:
    let dateObject = Date();

    // extract time elements (hr:min:sec)
    let timeChunks = dateObject.split(" ")[4].split(":");

    // get children of .container class:
    let elements = document.querySelector(".container").children;

    // update each child with its corresponding piece of time:
    for (let i=0; i<elements.length; i++){
        elements[i].textContent = timeChunks[i];
    }
}

// entry point:
setInterval(updateValues, 1000);
