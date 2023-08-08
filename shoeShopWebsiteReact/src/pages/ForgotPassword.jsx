import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignIn(){
    const forgotPasswordBg = "/src/img/sign-in.jpeg"

    return(
        <div className="sign" style={{backgroundImage: `url(${forgotPasswordBg})`}}>
            <ForgotPassword />
        </div>
    )
}

function ForgotPassword(){

    const [email, setEmail] = useState("")

    function handleSignInForm(e) {
        e.preventDefault();

        if(!email) return

        const forgotPass = {email: email}

        console.log(forgotPass)

        setEmail("")
        
    }

    return(
        <div className="sign-form"> 
            <form onSubmit={handleSignInForm}>
                <h1>Forgot Password</h1>
                <input
                     type="email"
                     placeholder='Enter your email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                    <div className="user-link">
                    <span>
                        <Link to="/sign-up">Create an Account</Link>
                    </span>
                    </div> 

                  <button>Login</button>   
            </form>
        </div>
    )
}