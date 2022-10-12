import React from "react";
//userd for routing
import { useNavigate } from "react-router-dom";

const Login = () => {
    //line 7 to 10 routing funtion
    let navigate = useNavigate();
    const gotoSignUp=()=>{
        navigate("/signup")
    }
  return (
    <div>
      <section>
        <div class="login_wrapper">
          <div class="login">
            <form>
              <h1>Login</h1>
              <div class="login_container">
                <label for="">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="input_box login_input"
                  placeholder="Username"
                />
                <label for="">Role</label>
                <select id="role" name="role" class="input_box signup_dd">
                  <option value="">Select Role</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="School Admin">School Admin</option>
                  <option value="Student">Student</option>
                  <option value="Super Admin">Super Admin</option>
                </select>
                <label for="">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="input_box login_input"
                  placeholder="Password"
                />
                <button class="primary_btn" id="submit" value="submit">
                  Login
                </button>
              </div>
            </form>
                <span>
                    {/* Routing on click */}
                  Not have an account <button onClick={gotoSignUp}>Signup</button>
                </span>
            <span>
              {" "}
              <a href="forgotPassword.html">Forgot Password</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
