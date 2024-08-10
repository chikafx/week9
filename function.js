function greet(id = 'chika'){
    console.log('hello',id)
}

greet('chika')

function addition(a,b=10){
    console.log(a=b)
}

addition(2,4)
addition(1)

function uppercase(text){
    console.log(text.toUpperCase())
}

uppercase('march')


function capitalize(str){
    str = str.toLowerCase() 
    console.log(str.replace(str[1],str[1].toUpperCase()))
}

capitalize('chinonso')

function capitalize(str){
    str= str.toUpperCase()
    console.log(str.replace(str[0],str[0].toLowerCase()))
}

capitalize('CHINONSO')

function truncate(str){
    length=20
    let len = str.length
    console.log(length <=20 ? str.slice(0,20)+ '....':str)
}

truncate('a quick brown fox jumps into your house')


function truncate(str,num){
    let len = str.num.length
    console.log(str.length >=num ? str.slice(0, num)+'...': str)
}

truncate('a quick brown fox jumps into your house')