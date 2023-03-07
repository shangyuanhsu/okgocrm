import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="Login">
      <div>
        <h3>Log in</h3>
        <form>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@mail.com"
            autoComplete="username"
            required
          />
          <p>
            <span>Password</span>
            <Link href="">forgot password?</Link>
          </p>
          <input
            type="password"
            placeholder="at least 8 characters"
            autoComplete="current-password"
            required
          />
          <div>
            <Link to="/" id="loginBtn" className="aBtn">
              Log in
            </Link>
          </div>
        </form>
        <div className="anotherChoice">
          <p>
            <span></span>
            <span>Or</span>
            <span></span>
          </p>
          <div>
            <img src={require("../../img/google-logo.png")} alt="google logo"/>
            <span>log in with Google</span>
          </div>
          <div>
            <img src={require("../../img/apple-logo.png")} alt="apple logo"/>
            <span>log in with Apple</span>
          </div>
        </div>
        <div className="anotherBox">
          <span>Don't have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
