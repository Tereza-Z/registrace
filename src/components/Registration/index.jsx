import React, {useState} from "react";
import './style.css';

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleEmailInput = (e) => {
        const emailValue = e.target.value;
        const position = emailValue.indexOf('@');

        setUser({
            ...user,
            email: emailValue,
            username: position !== -1 ? user.username /* když username není empty string nebo undefined, zachová se*/ || emailValue.slice(0, position) 
            /*pokud je empty string, použije se první část emailu*/ : user.username /*username se zachová beze změny*/
        });
    }

    const handleUsernameInput = (e) => {

        setUser({
            ...user,
            username: e.target.value,
        });
    }

    const handlePasswordInput = (e) => {

        setUser({
            ...user,
            password: e.target.value,
        });
    }

    const handlePasswordConfirmInput = (e) => {

        setUser({
            ...user,
            passwordConfirm: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({user})
        
        user.passwordConfirm === user.password ? 
            
            (alert("Registrace proběhla v pořádku"), 
            setUser({
                username: '', 
                email: '',    
                password: '', 
                passwordConfirm: '', 
            }),
            console.log({user}))
        : 
            alert("Hesla se neshodují")
    }


    return (
        <form onSubmit={handleSubmit}>

            <label for="email-input">Email:</label>
            <input
                id="email-input"
                type="email"
                value={user.email}
                onChange={handleEmailInput}
            />

            <label for="username-input">Username:</label>
            <input
                id="username-input"
                type="text"
                value={user.username}
                onChange={handleUsernameInput}
            />

            <label for="password-input">Password:</label>
            <input  
                    id="password-input" 
                    type="password" 
                    value={user.password}
                    onChange={handlePasswordInput} 
                    />
            
            <label for="confirmpassword-input">Confirm password:</label>
            <input  id="confirmpassword-input" 
                    type="password" 
                    value={user.passwordConfirm}
                    onChange={handlePasswordConfirmInput}
                    />

            <button type="submit"> REGISTER </button>
        </form>
    )
}


export default Registration