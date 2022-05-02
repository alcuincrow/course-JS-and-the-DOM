document.addEventListener('click', function () {
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'red';
});

document.body.addEventListener('keypress', function () {
    console.log('removing first child');
    document.querySelector('#contain-all').firstElementChild.remove();
});

document.addEventListener('click', function () {
    console.log('The document was clicked');
 });
 
 document.body.addEventListener('click', function () {
     console.log('The document body was clicked');
 });

 document.addEventListener('click', function (event) {
     console.log(event);
 });


 const myCustomDiv = document.createElement('div');

 function respondToTheClick() {
     console.log('A paragraph was clicked.');
 }
 
 for (let i = 1; i <= 200; i++) {
     const newElement = document.createElement('p');
     newElement.textContent = 'This is paragraph number ' + i;
 
     myCustomDiv.appendChild(newElement);
 }
 
 myCustomDiv.addEventListener('click', respondToTheClick);
 
 document.body.appendChild(myCustomDiv);