// Conversion Functiionality
const convertBtn = document.querySelector('.btn')
const binaryInput = document.querySelector('.content-box-1 input')
const decimalOutput = document.querySelector('.content-box-1 textarea')
const decimalInput = document.querySelector('.hide-content-box-2 input')
const binaryOutput = document.querySelector('.hide-content-box-2 textarea')
// console.log(decimalOutput)

// Binary to Decimal
convertBtn.addEventListener('click', (e) => {
  let binaryValue = binaryInput.value
  let resultDec = parseInt(binaryValue, 2).toString(10)
  
  decimalOutput.value = resultDec
  binaryInput.value = ''
})

// Decimal to Binary
convertBtn.addEventListener('click', (e) => {
  let decimalValue = decimalInput.value
  let resultBin = parseInt(decimalValue, 10).toString(2)
  
  binaryOutput.value = resultBin
  decimalInput.value = ''
})

// Toggle Button Functionality
const toggleBtn = document.querySelector('.exchange, a')
const binaryToDecimal = document.querySelector('.content-box-1')
const decimalToBinary = document.querySelector('.hide-content-box-2')

toggleBtn.addEventListener('click', (e) => {
  // console.log('clicked')
  decimalOutput.value = ''
  binaryOutput.value = ''

  binaryToDecimal.classList.toggle('hide')
  decimalToBinary.classList.toggle('content-box-2')
})
