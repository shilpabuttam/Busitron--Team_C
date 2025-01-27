import React from 'react'
import { useState } from 'react'

const Task1 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    return (
        <div className="container">
            <div className="login-card">
                <div className="logo">
                    <h1>Busitron</h1>

                </div>
                <h2>welcome To Admin Panel</h2>
                <form >
                    <div className="form-group">
                        <label htmlFor="emial">Email:</label>
                        <input type="emial" id="email" className="form-control" placeholder="enter a email" onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="password">password:</label>
                        <input type="password" id="password" className="form-control" placeholder="enter a password" onChange={(e) => setPassword(e.target.value)} required />

                    </div>
                    <div className="form-actions">
                        <div>
                            <input type="checkbox" id="remember me" />
                            <label htmlFor="rememberme">Remember me</label>
                        </div>
                        <a href="forgot-password">Forgot-password</a>
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </form>
                <div>email:{email}</div>
                <div>password:{password}</div>
            </div>
        </div>
    )
}

export default Task1