const number = document.getElementById('number')

const generateBtn = document.getElementById('generateBtn')

const randomNumberGenerator = ()=>{
    // const randomNumber = Math.random()*10 + 1
    let randomNumber = Math.floor(Math.random() * 20 + 1)
    // console.log(randomNumber)
    number.textContent = randomNumber
}

generateBtn.addEventListener('click', randomNumberGenerator)

// randomNumberGenerator()


