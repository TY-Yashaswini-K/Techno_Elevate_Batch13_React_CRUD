import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import StudentDetails from "../components/StudentDetails";
import { LoginConsumer } from "../context/loginContext";
import './Router.css'

export const routing = (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <Link className="navbar-brand" to="/" id="navname">
        Student Protal
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            <LoginConsumer>
              {(loginInfo) => {
                if (loginInfo.login) {
                  return (
                    <>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/register">
                          Register{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/details">
                          StudentDetails
                        </Link>
                      </li>
                      <li className="nav-item">
                        <p
                          className="nav-link"
                          onClick={() => {
                            loginInfo.logout();
                            window.location.pathname="/login";
                          }}
                        >
                          Logout
                        </p>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  );
                }
              }}
            </LoginConsumer>
          }
       
          
        </ul>
      </div>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/details" component={StudentDetails} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);
