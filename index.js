let numbers = [1,2,,3,4,5,6,7,8]
const response =  numbers.filter(element => {
    return element % 2 === 0;
})
console.log(response)