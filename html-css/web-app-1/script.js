const fun = () =>{
    // alert("Hello world");\
    // lbl1Message.innerHTML = document.getElementById('textMessage').value ;
    // lbl2Message.innerHTML = document.getElementById('passMessage').value;
    // const a=10,b=20;
    // const c = a+b
    // alert(res);
    let email = document.getElementById('textMessage').value 
    let pass = document.getElementById('passMessage').value
    if(email == "abhiramv1026@gmail.com" && pass=="1234"){
        lbl1Message.innerHTML = "Welcome"
    }  
    else{
        lbl1Message.innerHTML = "Incorrect"
    }
}