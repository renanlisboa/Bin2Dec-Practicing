// Converter Button





// Toggle Button Functionality
const toggleBtn = document.querySelector('.exchange, a')
const binaryToDecimal = document.querySelector('.content-box-1')
const decimalToBinary = document.querySelector('.hide-content-box-2')

toggleBtn.addEventListener('click', (e) => {
  // console.log('clicked')
  binaryToDecimal.classList.toggle('hide')
  decimalToBinary.classList.toggle('content-box-2')
})
