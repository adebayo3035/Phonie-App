
submitBtn.addEventListener('click', function handleClick(){
    var phone = document.getElementById('phone').value;
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    let network = document.getElementById('networkID');

    let result = document.getElementById('result');
    let formItem = document.getElementById('formItem');
    let phoneNumber = document.getElementById('phoneNumber');

    let phone_Number = document.getElementById('phone');
    let fullname_Input = document.getElementById('fullname');
    let email_Input = document.getElementById('email');

    let check = phone_Number.getAttribute("maxLength");
        // console.log(check);

        let phoneLength = parseInt(phone.length);
        // console.log(phoneLength);
    //Validate Input Field
    if ((!fullname_Input.checkValidity()) || (!email_Input.checkValidity()) || (!phone_Number.checkValidity())) {
        alert("Please Check Your Inputs")
        phone ="";
    }
    else if (check != phoneLength){
        alert("Your Phone Number is Invalid, Please Check your Phone Number and Try Again")
        phone =""
        phone_Number.focus();
        phone_Number.style.border ="3px solid orange";
    }
    
    else{
        

    //End of Input Field Validation
    if((phone.startsWith("0806") || phone.startsWith("0803") || phone.startsWith("0703") || phone.startsWith("0706") || phone.startsWith("0813") || phone.startsWith("0816") || phone.startsWith("0810") || phone.startsWith("0814") || phone.startsWith("0903")) == true){
        network.textContent = ( "Your Telephone Carrier is Mtn");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/mtn.png";
    }
    else if((phone.startsWith("0805") || phone.startsWith("0807") || phone.startsWith("0705") || phone.startsWith("0815") || phone.startsWith("0811") || phone.startsWith("0905")) == true){
        network.textContent = ( "Your Telephone Carrier is Glo");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/glo.png";
    }
    else if((phone.startsWith("0802") || phone.startsWith("0808") || phone.startsWith("0708") || phone.startsWith("0812") || phone.startsWith("0701") || phone.startsWith("0902")) == true){
        network.textContent = ( "Your Telephone Carrier is Airtel");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/airtel.jpg";
    }
    else if((phone.startsWith("0809") || phone.startsWith("0818") || phone.startsWith("0817") || phone.startsWith("0909")) == true){
        network.textContent = ( "Your Telephone Carrier is 9mobile");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/9mobile.png";
    }
    else if (phone.startsWith("0804")){
        network.textContent = ( "Your Telephone Carrier is NTEL");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/ntel.png";
    }
    else if (phone.startsWith("0702")){
        network.textContent = ( "Your Telephone Carrier is SMILE");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/smile.jpg";
    }
    
    else{
        network.textContent = ( "Your Telephone Carrier is Unknown");
        result.style.display ="flex";
        formItem.style.display ="none";
        phoneNumber.value = phone;
        document.getElementById("myImg").src = "resources/question.png";
    }

}

});

reset.addEventListener('click', function handleClick(){
    location.reload();
});