/*
function topla (a,b){
    return a+b;
}

function cıkar (x,y){
    return x-y;
}

function dortislem (parametre1,parametre2){
    let sonuc1 = topla(parametre1,parametre2);
    sonuc1 = cıkar(sonuc1,parametre1);
    //console.log(sonuc1)
    return sonuc1;
}

//dortislem(5,2)
console.log(dortislem(5,2));
*/

function isEqual(str1, str2){
    if(str1.toUpperCase() === str2.toUpperCase())
        return true;
     else
         return false;
}

console.log(isEqual("doga","DOGA"))