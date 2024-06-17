console.log("Welcome To JS.!!");
document.title = "WEEK-7";

function update() {
    let e = document.querySelector('#banner');
    if (e.innerHTML == "Week 7: DOM")
        e.innerHTML = "Meet Sonagara";
    else
        e.innerHTML = "Week 7: DOM";
}

function addH2Tag() {
    let e = document.createElement('h2');
    e.innerHTML = "Seneca College";
    //document.querySelector('#content').appendChild(e);
    document.getElementById('content').appendChild(e);
    //document.body.appendChild(e);
}

function addOL() {
    let names = ['Meet', 'Raj', 'Jay']; // Changed 'name' to 'names' for clarity
    let list = document.createElement('ol'); // Corrected 'documents' to 'document'
    for (let i = 0; i < names.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = names[i];
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

function addlink() {
    let e = document.createElement('a');
    e.innerHTML = 'ChatGPT';
    e.href = 'https://chatgpt.com/c/105753d5-9f86-4c9d-ba8f-7e39219ed80a';
    e.target = '_blank';
    document.body.insertBefore(e, document.body.firstChild);
}

function remove() {
    let firstChild = document.body.firstChild;
    document.body.removeChild(firstChild);
}