

var productName=document.getElementById("inputName");
var productEmail=document.getElementById("inputEmail");
var productPass=document.getElementById("inputPass");
var clickSignUp=document.getElementById("clickup");
var check=document.getElementById("checksignup")
var dataList=[];


function addData(){
  if(validName()&&validPass()&&validEmail()){
    product={
      productNameItem:productName.value,
      productEmailItem:productEmail.value,
      productPassItem:productPass.value,
    }
    dataList.push(product);
    localStorage.setItem("product",JSON.stringify(dataList));
  console.log(dataList);
  deleteItem();

  }
 
}
// clickSignUp.addEventListener('click',function(){
//   addData();
// });
function deleteItem(){
  productName.value="";
  productEmail.value="";
  productPass.value="";
window.location='./indx.html';
}
function validName(){
    var validName=productName.value;
    var regex=/^[a-z]{2,9}[ ]{0,1}[a-z]{0,11}$/
    if(regex.test(validName)){
      check.classList.add("d-none");
      return true;
    }else{
        check.classList.remove("d-none");
      return false;
    }
}

function validPass(){
    var validPass=productPass.value;
    var regex=/^[0-9]{3,9}$/
    if(regex.test(validPass)){
        check.classList.add("d-none");
      return true;
    }else{
        check.classList.remove("d-none");
      return false;
    }

}

function validEmail(){
    var validEmail=productEmail.value;
    var regex=/^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
    if(regex.test(validEmail)){
        check.classList.add("d-none");
      return true;
    }else{
        check.classList.remove("d-none");
      return false;
    }
    
}























var productEmailInput=document.getElementById("inputEmail");
var productPasswordInput=document.getElementById("inputPassword");
var clickBtn=document.getElementById("btnLogIn");
var message =document.getElementById("message");
if(localStorage.getItem("product")!=null){
  var storeData=JSON.parse(localStorage.getItem("product"));
 
}
var storeName="";
clickBtn.addEventListener('click',function(){
  logIn();

});
function logIn(){
    if(checkEmail()&&checkPass()){
        var data={
            logInEmailInput:productEmailInput.value,
            logInPassInput:productPasswordInput.value,
        }
        localStorage.setItem("arr",JSON.stringify(data));
  console.log(storeData);
  deleteInput();
    }
}

function deleteInput(){
    productEmailInput.value="";
    productPasswordInput.value="";
    window.location='./home.html';
}

function checkEmail(){
    var validEmail=productEmailInput.value;
    for(var i=0;i<storeData.length;i++){
      if(storeData[i].productEmailItem==validEmail){
         storeName= storeData[i].productNameItem;
        message.classList.add("d-none");
        return true;
              } else{
                message.classList.remove("d-none");
        return false;
              }
      }
    }


function checkPass(){
    var validPass=productPasswordInput.value;
    for(var i=0;i<storeData.length;i++){
      if(storeData[i].productPassItem==validPass){
        message.classList.add("d-none");
        return true;
              } else{
                message.classList.remove("d-none");
        return false;
              }
      }
}

