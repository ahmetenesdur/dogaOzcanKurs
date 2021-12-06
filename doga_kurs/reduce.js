let arr =[1,2,3];

/*
let toplam = 0;
for(let i=0;i<arr.length;i++){ 
    toplam = toplam + arr[i];
}
console.log(toplam);
*/

let toplam = arr.reduce((x,y) => x+y)
console.log(toplam);

/*
x = 1 , y = 2 => 1 + 2 = 3
x = 3 , y = 3 => 3 + 3 = 6
*/

/*
function doIt(arr1,arr2){
    let arr = [];
    arr.push(arr1);
    arr.push(arr2);
    return arr;
}

let arrtemp = doIt(2,10);
let toplam = arrtemp.reduce((x,y)=> x+y);
console.log(toplam);
*/

/*
let arr = [1,2,3,4]

let carpim = 1;
//dizi içerisindeki elamanların çarpımını bulan bir kod parçası yazar mısınız?
for(let i = 0; i < arr.length; i++ ){
   carpim = carpim * arr[i];
   
}
console.log(carpim);
*/

let arr = ["doga","murat","java","evm"]

// ödev dizideki karakter sayısı (length olarak) 4 5 4 3

let sonuc = arr.reduce((x,y) =>  x + y)


console.log(sonuc.length)

