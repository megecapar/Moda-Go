// Local Storage with adding multiple users (did not finish)

/*const createAccount = document.getElementById("registerForm");

const userName = document.getElementById('username');

const userEmail = document.getElementById('email');

const userPassword = document.getElementById('password');


function CreateUser(userName,userEmail,userPassword){
    this.userName = userName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
}

class LocalStorage{
    static getUsers(){
        let users;
        if(localStorage.getItem('users') === null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem('users'));
            
        }

      
    }
    static addUsers(){
        const users = localStorage.getUsers();
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
    }

    static removeUser(userEmail){
        const users = localStorage.getUsers();
        users.foreach((user,index) => {
            if(user.userEmail === userEmail){
                users.splice(index,1)
            }
        });
        localStorage.setItem('users',JSON.stringify(users));
    }
}

function addUser(){
    const user = new CreateUser(userName.value,userEmail.value,userPassword.value);
    
    if(user != ""){

    LocalStorage.addUser(user); 
    
    }
}

createAccount.addEventListener("submit",addUser);

*/