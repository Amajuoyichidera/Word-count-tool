let button = document.getElementById('btn');
let del = document.getElementById('del');

button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});

del.addEventListener('click', function(){
    let word = document.getElementById('str');
    let outputDiv = document.getElementById('output');
    word.value = ""
    outputDiv.innerHTML = ""
})
