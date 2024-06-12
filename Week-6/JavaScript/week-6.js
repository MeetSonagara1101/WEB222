console.log('This Is an Example of External JS Code')

let e = document.getElementById('id1');
e.innerHTML = "Meet";

e = document.getElementById('id2');
e.innerHTML = "<h3>Seneca College</h3>"

let names = ['Meet', 'Jay', 'Raj'];
let output = '<ul>';
for (let i = 0; i <= names.length; i++) {
    output += `<li>${names[i]}</li>`;
}
output += '</ul>';
document.getElementById('id3').innerHTML = output;