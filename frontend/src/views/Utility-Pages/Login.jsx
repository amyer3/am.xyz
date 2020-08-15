import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const request = async (user, pass) => {
    try {
        const { data } = await axios("https://ethical.ist/api/users/login", {
            method: 'post',
            data: {
                em: user,
                pw: pass
            }
        })
        return Promise.resolve(data)
    } catch (err) {
        const { error } = {
            status: err.response.status,
            data: err.response.data,
            success: false
        }
        return Promise.reject(error)
    }
}

export default function Login() {
    const [details, updateDetails] = useState({em:"", pw:""})

    function _submitLogin() {
        let { login } = request(details.em, details.pw)


        // POST to /api/users/login (?)
        // if success -> history.push to protected route

        // if fail -> handle fail
    }

    return (
        <div class="text-center pt-7 g-light full-height">
            <form class="form-signin" _lpchecked="1">
                <a href="/">
                    <img class="mb-4" src={little_logo} alt="" width="72" height="72" />
                </a>
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus="" autocomplete="off" />
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" autocomplete="off" />
                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> <p class="d-inline">Remember me</p>
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block e-light" type="submit"><b>Sign in</b></button>
                <p class="mt-5 mb-3 text-muted">© 2020</p>
            </form>

        </div>
    )
}