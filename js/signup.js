var productName=document.getElementById("inputName");
var productEmail=document.getElementById("inputEmail");
var productPass=document.getElementById("inputPass");
var clickSignUp=document.getElementById("clickup");
var check=document.getElementById("checksignup")
var dataList=[];
if(localStorage.getItem("product")!=null){
dataList=JSON.parse(localStorage.getItem("product"))
}

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
clickSignUp.addEventListener('click',function(){
  addData();
});
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
    if(regex.test(validEmail)!=true&& dataList.includes(validEmail)) {
      check.classList.remove("d-none");
      return false;
        
    }else{
      check.classList.add("d-none");
      return true;
    }
    
}












