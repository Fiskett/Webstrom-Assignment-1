function login(){
    let password=document.getElementById("password").value;
    let capitalCount = 0;
    let numCount = 0;
    let specialCount = 0;
    if(password.length<8){
        alert("Password must be at least 8 characters long");
        return;
    }
    for(let i=0;i < password.length;i++){
        const char =password[i]
        if(char>= 'A' && char<='Z'){
            capitalCount++;
        }
        else if(char>='0' && char<='9'){
            numCount++;
        }
        else if(char >= 'a' && char <= 'z'){

        }
        else{
            specialCount++;
        }
    }
    if(capitalCount<2)
        alert("Password must contain 2 capital letters");
    if(numCount<2)
        alert("Password must contain 2 numbers");
    if(specialCount<1)
        alert("Password must contain 1 special character");
}