let myArray = ['1', '2', '3'] 
let ikinciArray =[] // ['2','3'];

for(let i= myArray.length-1 ; i >= 0; i--){
    ikinciArray= myArray.shift()


}

console.log(ikinciArray)
