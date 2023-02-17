function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin"&&password=="user1") {
        alert("Login Successfully")
        window.location="sample/home.html";
        return false;

    } else if(username=="admin"&&password!="user1") {
        alert("Invalid Credentials")
        }
    else {
        alert("Enter The Valid Username and Password")
    }
        
    
}
