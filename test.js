function sumArray(arr){
    return arr.reduce((a,b)=> a+b,0)
}

console.log (sumArray([1,2,3,4,5]))

function maxElement(arr){
    return arr.sort((a,b)=>b-a)[0]
}

console.log(maxElement([33,43,54,65,66,22,43]))

function isEven(number){
    return number% 2==0
}
console.log(isEven(4))

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('kings'))

function factorial(num){
    return num < 0 ? 'factorial not applied to negative integers' : (num==0 || num ==1) ? 1 : num *factorial(num-1)
}

function calculateGrade(num){
    return num < 40 ? 'D' : num < 44 ? 'E' : num < 59 ? 'C' : num < 69 ? 'B' : num < 100 ? 'A' :'error'
    
}

console.log(calculateGrade(800))

function countVowels(str){
    const vowels = 'aeiou'
    return str.split('').filter(x=> vowels.indexOf(x) !==1).length
}

console.log(countVowels('kings'))

function secondLargest(arr){
    return arr.sort((a,b)=>b-a)[1]
}

console.log(secondLargest([1,23,45,6,543,-77]))

function capitalize(str){
    return str.split(' ').map (name=>name.replace(name [0], name[0].toUpperCase())).join(' ')

}
console.log(capitalize('come here now'))

function isPrime(num){
    return (num==2 || num ==3 || num ==5 || num ==7 || num ==11 || num ==13) ? 'prime' :num==1 ? 'not prime' : num % 2 ==0 || num % 3 == 0 || num % 5 ==0 ||num % 7 == 0 || num % 11 == 0 || num % 13 == 0 ? 'not prime' : 'prime'
}

console.log(isPrime(2))