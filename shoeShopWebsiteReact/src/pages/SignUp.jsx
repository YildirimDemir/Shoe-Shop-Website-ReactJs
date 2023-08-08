import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp(){

    const signUpBg = "/src/img/sign-in.jpeg"

    return(
        <div className="sign" style={{backgroundImage: `url(${signUpBg})`}}>
            <SignUpForm />
        </div>
    )
}

function SignUpForm(){

    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhoneNumber, setNewPhoneNumber] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [submittedUsername, setSubmittedUsername] = useState("");


    function handleSignUpForm(e) {
        e.preventDefault();

        if(!newUsername || !newEmail || !newPhoneNumber || !newPassword) return

        const newUser  = {username: newUsername, email: newEmail, tel: newPhoneNumber, password: newPassword}

        console.log(newUser)

        setSubmittedUsername(newUsername)
        setIsFormSubmitted(true)
        setNewUsername("")
        setNewEmail("")
        setNewPhoneNumber("")
        setNewPassword("")
    }

    return(
        <>
        <div className="sign-form"> 
            <form onSubmit={handleSignUpForm}>
                <h1>Sign Up</h1>
                <input
                     type="text"
                     placeholder='Create Username'
                     value={newUsername}
                     onChange={(e) => setNewUsername(e.target.value)}
                     />
                 <input
                     type="email"
                     placeholder='Enter Your Email'
                     value={newEmail}
                     onChange={(e) => setNewEmail(e.target.value)}
                     />
                 <input
                     type="tel"
                     placeholder='Enter Your Phone Number'
                     value={newPhoneNumber}
                     onChange={(e) => setNewPhoneNumber(e.target.value)}
                     />
                 <input
                     type="password"
                     placeholder='Enter Your Password'
                     value={newPassword}
                     onChange={(e) => setNewPassword(e.target.value)}
                     />

                    <div className="user-link">
                    <span>
                        <Link to="/sign-in">Do you have an account ?</Link>
                    </span>
                    </div> 

                  <button>Join Us</button>   
            </form>
        </div>
        {isFormSubmitted && <WelcomeUser user={submittedUsername} />}
        </>
    )
}


function WelcomeUser({user}){
    return(
        <div className="welcome-newuser">
            <div className="welcome-newuser-card">
                <h1>Welcome {user}</h1>
                <button>
                    <Link to="/user-menu">Continue</Link>
                </button>
            </div>
        </div>
    )
}