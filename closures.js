//closure exmaple 1
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

//closure use
const add10 = createAdder(10)
console.log(add10(-2))

//closure exmaple 2
const createTipper = (baseTip) => {
  return (amount) => {
    return baseTip * amount
  }
}

//closure use
const tip20 = createTipper(.2)
console.log(tip20(100))
