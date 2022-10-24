// document.getElementById('submitForm').addEventListener('click',isValid);
// // document.getElementById('CheckBox').addEventListener('')
     

// function isValid() {

// //     let user = document.getElementById('InputEmail1').value;
//     console.log(check);
// //     if(user==null || user==""){
// //         document.getElementById('EmailAlert').innerText="enter the email";
// //         document.getElementById('InputEmail1').focus();
//     }
//     if (){
//         document.getElementById('checkboxbtn').innerText="plz check this "
//     }
//     else{
//         ale
//         rt("Successfully Saved");
//         window.location.href="contact.html";
//     }
// }
// // function Login(){
// //     if(!IsValid()){
// //          window.location.reload();
// //      }
// //     else{
// //         alert("your request successfully submitted")
// //         window.location.href = 'index.html';
// //     }
// //     function IsValid(){
// //         let user = document.getElementById('InputEmail1').value;
// //         let pass = document.getElementById('CheckBox').value;
// //         if(user == null || user == "null" || user == ""){
// //            alert(document.getElementById('userInfo').innerHTML);
// //            //document.getElementById('userInfo').style.display = 'inline';
// //             Document.println(uError)
               
// //          return false;
// //         }
// //         if(pass == null || pass == "null" || pass == ""){
// //         // let pError= document.getElementById('passInfo').style.display = 'inline';
// //            alert(document.getElementById('passInfo').innerHTML);
// //             Document.println(pError);
// //              return false;
// //         }
// //         else{
// //             return true;
// //         }
// //     }


function clearErrors() {
    errors = document.getElementsByClassName('EmailAlert');
    for(let item of errors){
        item.innerHTML=" ";
    }
}

function setErrors(id,error) {

    //set errore in span
    element= document.getElementById(id);
    element.getElementsByClassName('EmailAlert')[0].innerHTML=error;
}
function ValidateForm(){
    var returnVal=true;
    clearErrors();

    // perform validation 
    var name= document.forms['myForm']["fName"].value;
    if(name.length<5){
        setErrors("name","*the length of name is to short");
        returnVal = false;
    }
    if(name.length==0){
        setErrors("name","*the length of name can not be Zero");
        returnVal = false;
    }
    var email= document.forms['myForm']["fEmail"].value;

    if(email.length<5){
        setErrors("email","*the length of email is to short");
        returnVal = false;
    }
    if(email.length>10){
        setErrors("email","*the length of email is too long")
        returnVal = false
    }

    return returnVal;
}