const users = []   

const fun = () =>{
    // alert("Hello world");
    // lbl1Message.innerHTML = document.getElementById('textMessage').value ;
    // lbl2Message.innerHTML = document.getElementById('passMessage').value;
    // const a=10,b=20;
    // const c = a+b
    // alert(res);
    // let email = document.getElementById('textMessage').value 
    // let pass = document.getElementById('passMessage').value
    // if(email == "abhiramv1026@gmail.com" && pass=="1234"){
    //     lbl1Message.innerHTML = "Welcome"
    // }  
    // else{
    //     lbl1Message.innerHTML = "Incorrect"
    // }
    // }
    // const user = {
    //     name:"Abhiram",
    //     email:"abhiramv1026@gmail.com",
    //     password:"1234"
    // }
    // console.log(user.name);
    // const arr = ["Maths","Science"]
    // console.log(arr[1]);
    // arr.push("English")
    // console.log(arr);
    // const users = [   {     name:"Abhiram",
    //     email:"abhiramv1026@gmail.com",
    //     password:"1234"
    // },
   // ]
    const email = document.getElementById('email1Message').value;
    const pass = document.getElementById('pass1Message').value;
    const found = users.find(value=>value.email===email && value.pass===pass)
    if(found){
        lbl1Message.innerHTML = "Welcome";
    }
    else{
        lbl1Message.innerHTML = "Not found";
    }
    }
const addUser = () =>{
    const name = document.getElementById('name2Message').value;
    const pass = document.getElementById('pass2Message').value;
    const email = document.getElementById('email2Message').value;
    let user = {
        name:name,pass:pass,email:email
    }
    users.push(user);
    showLoginForm()
    console.log(users);
}
const showLoginForm = () =>{
    const str = `<p><h3>Login Form</h3></p>
    <p><label id="lbl1Message"></label></p>
    <p><label id="lbl2Message"></label></p>
    <p> Email: <input type="text" name="" id="email1Message" placeholder="Email"></p>
    <p> Password: <input type="password" name = "password" id="pass1Message" placeholder="Password"></p>
    <p><input class="login-btn" type="button" name="button" value="Login" onclick={fun()}></p>
    <hr>
    <p><input class="create-acc-btn" type="button" value="Create Account" name="" id="" onClick={showRegForm()}></p>`
    root.innerHTML = str
}
const showRegForm = () =>{
    const  str = `
    <p> <h3>Registration Form</h3></P>
    <p> Name: <input type="text" name="" id="name2Message" placeholder="name"></p>
    <p> Email: <input type="text" name="" id="email2Message" placeholder="email"></p>
    <p> Password: <input type="password" name = "password" id="pass2Message" placeholder="Password"></p>
    <p><input class="create-acc-btn" type="button"  value="Create" onclick={addUser()}></p>
    <hr>
    <p> Already Created ? <input class="login-btn" type="button" name="Button" value="Login" onclick={showLoginForm()}></p>
    
    `

    root.innerHTML = str
}