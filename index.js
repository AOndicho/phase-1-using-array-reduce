const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let total=0;
let totalBatteries=batteryBatches.reduce(function(total,batteryBatches){
    // console.log(batteryBatches)
    total=total+batteryBatches
    // console.log(total)
    return total
})
console.log(total)