




// selecting the input
let titleEl = document.getElementById('title');
// selection the ul
let listEL = document.getElementById('list');
// button
let addbuttonEl = document.getElementById('add-btn');



addbuttonEl.addEventListener('click',function(){
    // extracting the value from input
    let tittletxt = titleEl.value;
    // creating the li for appending it
    let li = document.createElement('li');
    // inserting the text from input into li
    li.innerText = tittletxt;
    // newly created li ko add karna
    listEL.appendChild(li);
    // clear the input
    titleEl.value =" "; 

    // remove the li after clicking on the li
    li.addEventListener('click',function(){
        li.remove();
    })
})