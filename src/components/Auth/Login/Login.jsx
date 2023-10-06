import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='example@gmail.com' id='email' name='email'></input>
            <label for="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Teacher1!' id='password' name='password'></input>
            <button type="submit">Log in</button>
        </form>
    </>
  )
}
