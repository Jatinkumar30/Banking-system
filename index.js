const userNameE1 = document.getElementById('userName');
const userEmailE1 = document.getElementById('userEmail');

function loginInfo() {
    
    if(userNameE1.value==''){ 
        alert('Sorry ,Invalid Credentials')
        // console.log("nope");
    }
    else{
        alert('You have successfully logged in!!')
        // console.log("nope");
        //console.log('hello')   
    }
}
