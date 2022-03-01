
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const os = document.getElementById('os');
const file = document.getElementById('upload');

let validEmail = false;
let validPhone = false;
let validName = false;
let validOS = false;


name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name 
    let regex = /^[a-zA-Z]([\sa-zA-Z]){2,40}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})
    //onsubmit
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    console.log('You clicked on submit');
    
    console.log(validEmail, validUser, validPhone);
        if(validEmail && validUser && validPhone &&validOS){
            console.log('Phone, email ,os and name are valid. Submitting the form');   
            alert("Form submitted");
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');      
        alert("Kindly fill form correctly")
        }
})
function resetForm(){
    document.getElementById("myForm").reset();
}

   //os radio
   if(document.getElementById('os').checked == true) {   
    validOS = true;  
    address.classList.remove('is-valid');
} else {  
    validOS = false;
    address.classList.add('is-valid');
}

