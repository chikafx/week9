// if elese if statement
let phoneBattery = 0


if (phoneBattery >= 100){
    console.log('battery full')
}

else if (phoneBattery >= 50){
    console.log('please connect your charger')
}

else if (phoneBattery >= 20) {
    console.log('phone critically low')
}

else if (phoneBattery == 0) {
    console.log('phone will turn off now')
}

else{
    console.log('please connect your charger')
}