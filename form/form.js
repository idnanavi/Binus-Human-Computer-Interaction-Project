var elementName = document.getElementById('txtName');
var elementEmail = document.getElementById('email');
var elementPassword = document.getElementById('password');
var elementPhone = document.getElementById('phoneNumber');
var btn = document.getElementById('btn');
var error = document.getElementById('warning');
var gender = document.getElementsByName('gender');
var flag;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

btn.addEventListener('click',function(){
    let name = elementName.value;
    let email = elementEmail.value;
    let password = elementPassword.value;
    let phone = elementPhone.value;
    let counter = 0;

    if(name.length === 0){

    }
    if(name.length === 0 ||email.length === 0|| password.length === 0 || phone.length === 0 || (gender[0].checked == false && gender[1].checked ==false)){
        alert('Fill All  Data First')
        if(name.length === 0 && email.length === 0 && password.length === 0 && phone.length === 0 && gender[0].checked == false && gender[1].checked ==false){
            error.innerHTML ='Please Fill Your Data';
        }else{
            if(name.length === 0){
                error.innerHTML = 'Please Fill Your Name';
            }
            else if(email.length === 0){
                error.innerHTML = 'Please Fill Your Email';
            }
            else if(password.length === 0){
                error.innerHTML = 'Please Fill Your Password';
            }
            else if(phone.length === 0){
                error.inerrHTML = 'Please Fill Your Number';
            }
            else if(gender[0].checked == false && gender[1].checked ==false){
                error.innerHTML ='Please Fill Your Gender';
            }
            else{
                error.innerHTML = "";
            }
        }
    }

    if(name.length !== 0){
        if(name.length < 5 || name.length >20){
            alert('your name must between 5 and 20');
        }
        else{
            counter ++;
        }
    }

    if(phone.length !== 0){
        if(isNaN(phone)){
            alert('phone number must be number');
        }
        else {
            if(phone.length < 10 || phone.length > 12){
                alert('phone number must between 10 and 12');
            }    
            else{
                counter++;
            }
        }
    }

    if(password.length !== 0 ){
        if(password.search(name)>=0){
            alert('password must not contain your name');
        }
        else{
            counter++;
        }
    }

    if(email.length !== 0){
        if (validateEmail(email)) {
            counter++;
        }
        else{
            alert('invalid email');
        }
    }

    if(gender[0].checked == true || gender[1].checked ==true){
        counter++;
    }

    if(counter == 5){
        alert('Success');
        location.reload();
    }
})