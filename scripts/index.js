const btn=document.getElementById('btn');

btn.addEventListener("click",function(){
    const userInput=document.getElementById('username').value;
    const passInput=document.getElementById('password').value;

    if (userInput === "AdminSEF123" && passInput === "SeF@ctORy$$456") {
        window.location.href = "todo.html";
    }
    else{
        alert('Invalid username or password');
    }
});
