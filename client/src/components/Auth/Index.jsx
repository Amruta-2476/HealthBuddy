import React, { useState } from "react";
import google_logo from "../Assets/google_logo.png";
import "./index.css";

function Index() {
  const [register, setRegister] = useState(false);
  return (
    <div className="auth">
      <div className="auth-container">
      <p>{register ? "Sign Up" : "Sign In"}</p>
        <div className="signin-options">
          <div className="signin-option">
            <img src={google_logo} alt="google" />
            <p>Sign {register ? "Up" : "In"} with Google</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <button>Register</button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <button>Login</button>
              </>
            )}
            <p onClick={() => setRegister(!register)}>{register ? "Already have an account? Login" : "Don't have an account? Register"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
