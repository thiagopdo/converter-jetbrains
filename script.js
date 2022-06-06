

let upperCasy = document.getElementById("upper-case");
let lowerCasy = document.getElementById("lower-case");
let properCasy = document.getElementById("proper-case");
let sentenceCasy = document.getElementById("sentence-case");
let textSaved = document.getElementById("save-text-file")
//let textArey = document.querySelector("textarea")

upperCasy.addEventListener("click", function (){
    let text = document.querySelector('textarea').value;
    document.querySelector('textarea').value = text.toUpperCase();
});

lowerCasy.addEventListener("click", function () {
    let text = document.querySelector('textarea').value;
    document.querySelector('textarea').value = text.toLowerCase();
});

properCasy.addEventListener('click', function (){

    let text =  document.querySelector('textarea').value;
    document.querySelector('textarea').value = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
})

sentenceCasy.addEventListener("click", function () {
    let text = document.querySelector("textarea").value.toLowerCase();
    let string = text.split ('. ')
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    text = string.join('. ')
    document.querySelector("textarea").value = text;
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


textSaved.addEventListener("click", function() {
// Start file download.
    let text= document.querySelector("textarea").value
    download("text.txt", text);
})

