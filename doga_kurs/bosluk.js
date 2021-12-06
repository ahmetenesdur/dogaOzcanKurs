let myArray = ['Wind','Rain','Fire'];
let list="";

for(let i=0;i<myArray.length;i++){
    if(i==0){
        list=list+myArray[i];
    }
    else{
        list = list + "+" + myArray[i];
    }
}
console.log(list);