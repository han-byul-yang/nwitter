import React, { useState } from 'react'
import { authService } from '../firebase'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

const Auth = () => {
    const [emailState, setEmail] = useState('')
    const [passwordState, setPassword] = useState('')
    const [newAccount, setnewAccount] = useState(false)
    const [errorState, setError] = useState('')

    const onChange = (e) => {
        const {target: {value, name}} = e
        if (name === 'email'){
            setEmail(value)
        } else {
            setPassword(value)
        }
    }
    const onsubmit = async (e) => {
        e.preventDefault()
        try{
            let data
        if (newAccount){
            data = await createUserWithEmailAndPassword(getAuth(), emailState, passwordState)
        } else {
            data = await signInWithEmailAndPassword(getAuth(), emailState, passwordState)
        }}
        catch (e){
            setError(errorState)
            console.log(e)
        }
    }
    return (
        <form onSubmit={onsubmit}>
            <input type="email" required name="email" placeholder='email' onChange={onChange} value={emailState}></input>
            <input type="password" required name="password" placeholder='password' onChange={onChange} value={passwordState}></input>
            <input type="submit" value={newAccount ? "sign up" : "sign in"}></input>
        </form>
    )
}

export default Auth