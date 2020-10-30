const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordA = document.getElementById('passowrdA');
const submitBtn = document.getElementById("submitBtn");
var inputField = document.getElementsByClassName("inputField");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nameArray = Array.from(inputField)

    nameArray.forEach(field => {
        console.log(field.className);

        if(field.value === ''){
            field.className = "inputField error";
            console.log('Oga fill this form osiso');
        }else{
            field.className = 'inputField success';
            console.log(field.value);
        }
    })

});



// function checkInputs(){
//    const usernameValue = username.Value.trim();
//     const emailValue = email.Value.trim();
//     const passwordValue = password.Value.trim();
//     const passowrdA = passwordA.Value.trim();
//     if(usernameValue === ''){
//        setErrorFor(username, 'please enter username');
//     }else{
//         setSuccessFor(username);

//     }
// }
// function setErrorFor(input, message){
//     const formControl = input.parentElemet;
//     const small = formControl.queryselector('small')
//     small.innerText = message;
//     // formControl.className = 'form-control error';
// }
// function setSuccessFor(input){
//     const formControl = input.parentElemet;
//     // formControl.className = 'form-control success';
// }



