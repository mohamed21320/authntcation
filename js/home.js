var storeProduct=JSON.parse(localStorage.getItem("product"));
var storeArr=JSON.parse(localStorage.getItem("arr"));

var storeName="";


for(var i=0;i<storeProduct.length;i++){
if(storeProduct[i].productEmailItem==storeArr.logInEmailInput){
    storeName= storeProduct[i].productNameItem;
    document.getElementById("welcome").innerHTML=`welcome ${storeName}`;
}
}