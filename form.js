function i_name(){
    let inp_name=document.getElementById("user").value;
    let regx_name=/^[A-Za-z0-9]+$/;
    if(regx_name.test(inp_name)){
        document.getElementById("name_span").style.color="green";

        document.getElementById("name_span").innerHTML = 'success';

    }
    else{
        document.getElementById("name_span").style.color="red";
        document.getElementById("name_span").innerHTML="enter valid user name!"
    }
}

function i_email(){
    let inp_email = document.getElementById('email').value;
    let regx_email = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-_.]+$/;
    if(regx_email.test(inp_email)){
        document.getElementById("email_span").style.color="green";
        document.getElementById("email_span").innerHTML = 'success';

    }
    else{
        document.getElementById("email_span").style.color="red";
        document.getElementById("email_span").innerHTML = "please enter correct email";
    }
}

function i_phno(){
    let inp_phno = document.getElementById('number').value;
    let regx_phno = /^[0-9]+$/;

    if(regx_phno.test(inp_phno))
    {
        document.getElementById("phno_span").style.color="green";
        document.getElementById("phno_span").innerHTML = 'success';

    }
    else{
        document.getElementById("phno_span").style.color="red";
        document.getElementById("phno_span").innerHTML = 'please correct phone number';

    }
  
    
}

function i_pswd(){
    let inpt_pswd = document.getElementById('password').value;
     
    let regx_pswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()?></.,"'-_:;]).{6,12}$/

    if(regx_pswd.test(inpt_pswd))
    {
        document.getElementById("pswd_span").style.color="green";
        document.getElementById("pswd_span").innerHTML = 'success';
    }
    else {
        document.getElementById("pswd_span").style.color="red";
        document.getElementById('pswd_span').innerHTML = "please enter strong password";
    }


}

function  i_rpswd(){
    let inpt_pswd = document.getElementById('password').value;
    let inpt_rpswd = document.getElementById('password1').value;
    if (inpt_pswd == inpt_rpswd){

        document.getElementById("rpswd_span").style.color="green";

        document.getElementById("rpswd_span").innerHTML = 'success';

    }
    else{
        document.getElementById("rpswd_span").style.color="red";

        document.getElementById("rpswd_span").innerHTML = 'passsword miss-match';

    }
}
