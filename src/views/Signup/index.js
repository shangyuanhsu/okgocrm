import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="Signup">
      <div>
        <h3>Sign up</h3>
        <form>
          <p>First name</p>
          <input
            type="text"
            autoComplete="username"
            placeholder="your first name"
            required
          />
          <p>Last name</p>
          <input
            type="text"
            autoComplete="username"
            placeholder="your last name"
            required
          />

          <p>Email</p>
          <input
            type="email"
            placeholder="example@mail.com"
            autoComplete="username"
            required
          />
          <p>
            <span>Password</span>
          </p>
          <input
            type="password"
            placeholder="at least 8 characters"
            autoComplete="current-password"
            required
          />
          <div>
            <Link to="/" id="loginBtn" className="aBtn">
              Sign up
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
            <span>Sign up with Google</span>
          </div>
          <div>
            <img src={require("../../img/apple-logo.png")} alt="apple logo"/>
            <span>Sign up with Apple</span>
          </div>
        </div>
        <div className="anotherBox">
          <span>Already have an account?</span>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
