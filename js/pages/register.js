class Register {
    $containerDiv
    $titleH2
    $signupForm
    $emailInputEmail
    $nameInputTxt
    $passInputPass
    $confirmPassInputPass
    $submitBtn
    $gotoSigninLink

    constructor () {
        this.$emailInputEmail = document.createElement("input"); // <input> </input>
        this.$emailInputEmail.type = "email"; 
        this.$emailInputEmail.placeholder = "Enter your email..."

        this.$nameInputTxt = document.createElement("input")
        this.$nameInputTxt.type = "text";
        this.$nameInputTxt.placeholder = "Enter your name... "

        this.$passInputPass = document.createElement("input")
        this.$passInputPass.type = "password";
        this.$passInputPass.placeholder = "Enter your password ..."

        this.$confirmPassInputPass = document.createElement("input")
        this.$confirmPassInputPass.type = "password";
        this.$confirmPassInputPass.placeholder = "Confirm your password... "


        this.$submitBtn = document.createElement("button")
        this.$submitBtn.type = "submit";
        this.$submitBtn.innerHTML = "Register"
        this.$submitBtn.addEventListener("click", this.handleSubmit);

        this.$gotoSigninLink = document.createElement("a")
        this.$gotoSigninLink.innerHTML  = "You already have account? Signin now";
        this.$gotoSigninLink.addEventListener("click", this.gotoSignin)


        this.$containerDiv = document.createElement("div")
        this.$containerDiv.classList.add("center","app")

        this.$titleH2 = document.createElement("h2")
        this.$titleH2.innerHTML = "Create your account"

        this.$signupForm = document.createElement("form")
        this.$signupForm.style = ""

       
    }

    initRender = (container) => {
        this.$signupForm.appendChild(this.$emailInputEmail);
        this.$signupForm.appendChild(this.$nameInputTxt);
        this.$signupForm.appendChild(this.$passInputPass);
        this.$signupForm.appendChild(this.$confirmPassInputPass);
        this.$signupForm.appendChild(this.$submitBtn);

        this.$containerDiv.appendChild(this.$titleH2); 
        this.$containerDiv.appendChild(this.$signupForm); 
        this.$containerDiv.appendChild(this.$gotoSigninLink)

       
        container.appendChild(this.$containerDiv)


    }



    handleSubmit = (e) => {
     
// validation
e.preventDefault(); // can lai cac su mac dinh de xem co dung yeu cau nhap du lieu chua 
const email = this.$emailInputEmail.value;
const password = this.$passInputPass.value;
const confirmPass = this.$confirmPassInputPass.value;
const userName = this.$nameInputTxt.value;

if(email == "") {
 alert("Email cannot be empty!");
 return;
}
if(password.length < 6) {
 alert("Password must be least 6 letters!");
 return;
}
if(userName == "") {
  alert("Username cannot be empty!");
  return;
 }
 if(confirmPass == "") {
  alert("Confirm your password!");
  return;
 }
 if(password != confirmPass) {
  alert("Your password not match!");
  return;
 }




        
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = "./index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
                                                                                          
    gotoSignin = () => {
        const login = new Login();
        app.changeActiveScreen(login);
    }
}

export default Register;
