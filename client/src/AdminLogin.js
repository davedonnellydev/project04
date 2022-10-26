import "./AdminLogin.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

const AdminLogin = (props) => {
    const {setLoggedIn} = props;

    const login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        axios.post('/admin/login', data)
        .then((dbRes) => {
            setLoggedIn(true);
        })
        .catch((err) => {
            console.log(err);
        })

    }

        return (
        <div className="AdminLogin">
            <h2 id="login-heading">Login</h2>
            <form id="admin-login-form" onSubmit={login}>
            <input id="email" name="email" type="email" placeholder="Email"/>
            <input id="password" name="password" type="password" placeholder="Password"/>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default AdminLogin;