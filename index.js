let button = document.getElementById('registar');
let counter = 0;
button.addEventListener('click', (event) => {

    /*get data from input fields */
    let data1 = document.getElementById('name').value;
    let data2 = document.getElementById('surname').value;
    let data3 = document.getElementById('country').value;
    let data4 = document.getElementById('age').value;
    console.log(data1 + '\n' + data2 + '\n' + data3 + '\n' + data4);

    /*To create div and add element inside of it */
    let mainPackage = document.getElementById('main');
    mainPackage.appendChild(document.createElement('div'));
    let thediv = mainPackage.getElementsByTagName('div')[counter];
    thediv.appendChild(document.createElement('p')).innerText = data1;
    thediv.appendChild(document.createElement('p')).innerText = data2;
    thediv.appendChild(document.createElement('p')).innerText = data3;
    thediv.appendChild(document.createElement('p')).innerText = data4;
    counter++;
});