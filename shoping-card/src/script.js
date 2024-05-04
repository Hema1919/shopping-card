//Image selection
function displayImage(imageUrl) {
    let container = document.querySelector('.main-content');
    container.innerHTML = '<img src="' + 'images/'+ imageUrl + '" alt="Selected Image">';
    
              
}

//dscount-calculaton



const discountPrice = Number(document.getElementById("org-price").innerText);
const originalPrice = Number(document.getElementById("ds-price").innerText);

const result = Math.round(((originalPrice-discountPrice)/originalPrice)*100);

document.querySelector('.right-container-price').innerHTML = `${result}% Off`;


// value selection

const displayValue = document.querySelector('.js-ouput-value');
let counter = 0;
function add(){
    counter = counter+1;
    displayValue.innerHTML = counter
}
function sub(){
    counter = counter-1;
    displayValue.innerHTML = counter
    
}

let selectedOption;
const form = document.querySelector('form');
form.addEventListener('click', function() {
    selectedOption = document.querySelector('input[name="size"]:checked'); 
    selectedOption.classList.add('selected-box'); 

});

let userSelectedColor;
const selectedbox = document.querySelectorAll('.color-box >div');
selectedbox.forEach((event) => {    
    event.addEventListener('click',() =>{
    userSelectedColor = event.dataset.selectedColor;
    })

})

const paragraphOption = document.querySelector('.add-to-cart-description-paragraph');
const addToCartOption = document.querySelector('.add-to-cart-description');

function addToCart() {
    if (selectedOption && userSelectedColor){
       paragraphOption.innerHTML = `Embrace Sideboard with Color ${userSelectedColor} and Size ${selectedOption.value} added to cart`;
       addToCartOption.style.display= 'block';

    }
     else {
        paragraphOption.innerHTML = `Please select color and Size`;
        addToCartOption.style.display ='block'

    }
    setTimeout(() => {
        addToCartOption.style.display = 'none'
    }, 3000);
}
    
















