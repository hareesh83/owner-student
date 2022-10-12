import React from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate=useNavigate()
  return (
    <div style={{marginTop:'120px'}}>
      <section>
        <div className="signup_wrapper">
          <div className="signup">
            <form>
              <h1>Signup</h1>
              <div className="login_container">
                <label for="">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input_box signup_input"
                  placeholder="Username"
                />
                <label for="">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input_box signup_input"
                  placeholder="Email"
                />
                <label for="">Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="input_box signup_input"
                  placeholder="Mobile Number"
                />
                <label for="address">Address</label>
                <textarea
                  className="input_box signup_input"
                  name="address"
                  id="address"
                  rows="4"
                  cols="50"
                ></textarea>
                <label for="">Role</label>
                <select name="role" id="role" className="input_box signup_dd">
                  <option value="">Select Role</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="School Admin">School Admin</option>
                  <option value="Student">Student</option>
                </select>
                <label for="">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input_box signup_input"
                  placeholder="Password"
                />
                <label for="">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className="input_box signup_input"
                  placeholder="Confirm Password"
                />
                <label>Profile Picture</label>
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="input_box signup_input"
                  style={{marginBottom: '21px'}}
                />
                <button className="primary_btn" id="submit" value="submit">
                  SignUp
                </button>
                {/* <a href="mailto:vobbiliredy.anu6298@gmail.com?Subject=You are about to signup&body=Your email is abc@gmail and password for login is 123456 " className="primary_btn">Signup</a> */}
              </div>
            </form>
                <span>
                    {/* Routing without external function  */}
                  Already have an account<button type="button" onClick={()=>navigate("/login")}>Login</button>
                </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
