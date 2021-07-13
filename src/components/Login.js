import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/loginContext'

export default function Login() {
    const context = useContext(LoginContext);
    const history = useHistory();

    const login =()=>{
        console.log(context);
        context.changeLogin(true);
        console.log(context.login);
        localStorage.setItem("session" , true)
        history.push("/")
    }
    return (
        <div>
          
            <div className="col-md-4 offset-md-4 mt-5">
      <div className="card">
        <div className="card-header text-center text-white bg-secondary"><h3>Login to Account</h3></div>
        <div className="card-body">
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="card-footer">
        
         <button  className="btn btn-primary float-right" onClick={login} style={{marginLeft:"650px"}}>Login</button>

          
          
        </div>
      </div>
        </div>
        </div>
    )
}
