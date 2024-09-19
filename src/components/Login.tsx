import React, { useState } from "react"
import { ILogin } from "./models/ILogin"

interface ILoginState {
    user: ILogin
}
const Login: React.FC = () => {
    const [state, setState] = useState<ILoginState>({
        user: {
            password: '',
            email: ''
        }
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
        event.preventDefault();
        console.log(state.user)
    }
    return (
        <>
            <div className="container">
                <div className="w-50">
                    <form className="card p-4" onSubmit={handleSubmit}>
                        <h1>Login Form</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={state.user.email} onChange={handleChange} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" value={state.user.password} name="password" onChange={handleChange} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
                <div className="mt-4 bg-light p-4">

                    <p>{JSON.stringify(state.user)}</p>
                </div>
            </div>
        </>
    )
}
export default Login