import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignIn(){
    const signInBg = "/src/img/sign-in.jpeg"

    return(
        <div className="sign" style={{backgroundImage: `url(${signInBg})`}}>
            <SignInForm />
        </div>
    )
}

function SignInForm(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleSignInForm(e) {
        e.preventDefault();

        if(!email || !password) return

        const user  = {email: email, password: password}

        console.log(user)

        setEmail("")
        setPassword("")
        
    }

    return(
        <div className="sign-form"> 
            <form onSubmit={handleSignInForm}>
                <h1>Sign In</h1>
                <input
                     type="email"
                     placeholder='Enter your email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                 <input
                     type="password"
                     placeholder='Enter Password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     />
                    <div className="user-link">
                    <span>
                        <Link to="/sign-up">Create an Account</Link>
                    </span>
                    <span>
                        <Link to="/forgot-password">Forgot Password</Link>
                    </span>
                    </div> 

                  <button>Login</button>   
            </form>
        </div>
    )
}