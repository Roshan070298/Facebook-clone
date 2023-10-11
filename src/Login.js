import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import {auth, provider} from "./firebaseConfig";
import  {signInWithPopup} from "firebase/auth"
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer"

function Login() {
    const [state, dispatch] = useStateValue();
   // const xy = useStateValue();
    //const {initialState, reducer} = xy

   // console.log(initialState);
    //console.log(reducer);
    const signIn = () => {
        //signIn
        signInWithPopup(auth, provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            
            
            })
        .catch((error) => alert(error.message));
    }
  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://thumbs.dreamstime.com/b/rounded-facebook-logo-transparent-white-background-web-use-printing-purpose-rounded-facebook-logo-web-print-205627443.jpg" alt="" />
        <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />
      </div>
      <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
