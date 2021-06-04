console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	alert('give the user a compliment')
}

let img1 = document.getElementById('img1')
img1.addEventListener('mouseover', compliment);
