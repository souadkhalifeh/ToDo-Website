const btn=document.getElementById('btn');
const userInput=document.getElementById('username').value;
const passInput=document.getElementById('password').value;

const credentials={
    username: 'AdminSEF123',
    password: 'SeF@ctORy$$456',
};

btn.addEventListener("click",function(){
    if (userInput === credentials.username && passInput === credentials.password) {
        window.location.href = 'todo.html';
    }
    else{
        alert('Invalid username or password');
    }
});
