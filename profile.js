const color = document.getElementById('color');
const place = document.getElementById('place');
const ritual = document.getElementById('ritual')


 
color.addEventListener('click', function(event){
    alert('favorite color')
})
 
place.addEventListener('click', function(evt){
    alert('favorite place')
})

ritual.addEventListener('click', function(event){
    alert('favorite ritual')
})



color.style.backgroundColor = "yellow"
color.style.height = '50px'

place.style.backgroundColor = "yellow"
place.style.height = '50px'

ritual.style.backgroundColor = "yellow"
ritual.style.height = '50px'