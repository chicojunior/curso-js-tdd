/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */

const a = 3
const b = 2

const c = 'fdhsfjkdsahfjkdaslhfjkdaslhfjkdsalhfjkdslhfjsdkl'

function sum() {
  return a + b + c
}

const test = sum()

console.log(test)

const australia = ['Adelaide', 'Brisbane', 'Sydney']

// ES5 function
const love = australia.map(function(city) {
  return `I love ${city}`
})

// ES6 arrow function
const loveArrow = australia.map((city) => {
  return `I love ${city}`
})

// ES6 arrow function single parameter
const loveArrowSingleArgument = australia.map(city => {
  return `I love ${city}`
})

// ES6 arrow function one line
const loveArrowOneLine = australia.map(city => `I love ${city}`)

const loveChain = australia.filter(city => city === 'Adelaide').map(city => `I love ${city}`)

console.log(loveChain)
