const convertBtn = document.querySelector('.btn')
const binaryInput = document.querySelector('.content-box-1 input')
const decimalOutput = document.querySelector('.content-box-1 textarea')
const decimalInput = document.querySelector('.hide-content-box-2 input')
const binaryOutput = document.querySelector('.hide-content-box-2 textarea')
const toggleBtn = document.querySelector('.exchange-icon .fa')
const binaryToDecimal = document.querySelector('.content-box-1')
const decimalToBinary = document.querySelector('.hide-content-box-2')

// Input Error Events
binaryInput.addEventListener('input', (e) => {
  const binDigits = binaryInput.value.length
  binDigits > 8 ? maxDigitsError() : notBinaryError()
})

// Binary to Decimal Conversion
convertBtn.addEventListener('click', (e) => {
  const binaryValue = binaryInput.value || 0
  const resultDec = parseInt(binaryValue, 2).toString(10)
  decimalOutput.value = resultDec
  binaryInput.value = ''
})

// Decimal to Binary Conversion
convertBtn.addEventListener('click', (e) => {
  const decimalValue = decimalInput.value || 0
  if (decimalValue < 0) {
    notNaturalNumberError() 
  } else {
    const resultBin = parseInt(decimalValue, 10).toString(2)
    binaryOutput.value = resultBin
    decimalInput.value = ''
  }
})

// Toggle Button Functionality
toggleBtn.addEventListener('click', (e) => {
  // console.log('clicked')
  decimalOutput.value = ''
  binaryOutput.value = ''

  binaryToDecimal.classList.toggle('hide')
  decimalToBinary.classList.toggle('content-box-2')
})



// Functions
function maxDigitsError() {
  const span = document.createElement('span')
  const errorMsg = document.createTextNode('8 digits max!')

  span.appendChild(errorMsg)
  span.classList.add('error-msg')
  document.querySelector('.content-boxes').appendChild(span)

  binaryInput.value = ''
  
  setTimeout(() => {
    document.querySelector('.content-boxes').removeChild(span)
  }, 2000)
}

function notBinaryError() {
  const binaryValue = binaryInput.value
  const binDigits = binaryInput.value.length
  const binInpSplit = binaryValue.split("", binDigits)
  const binInpFilter = binInpSplit.filter(binInpSplit => binInpSplit != 0 && binInpSplit != 1)
  // console.log(binInpFilter)
  if (binInpFilter.length > 0) {
    const span = document.createElement('span')
    const errorMsg = document.createTextNode('Not a binary!')

    span.appendChild(errorMsg)
    span.classList.add('error-msg')
    document.querySelector('.content-boxes').appendChild(span)

    binaryInput.value = ''
    
    setTimeout(() => {
      document.querySelector('.content-boxes').removeChild(span)
    }, 2000)
  }  
}

function notNaturalNumberError() {
    const span = document.createElement('span')
    const errorMsg = document.createTextNode('Enter a natural number!')

    span.appendChild(errorMsg)
    span.classList.add('error-msg')
    document.querySelector('.content-boxes').appendChild(span)

    decimalInput.value = ''
    
    setTimeout(() => {
      document.querySelector('.content-boxes').removeChild(span)
    }, 2000)
}