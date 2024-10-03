import React, { useState } from "react";
import google_logo from "../Assets/google_logo.png";
import "./index.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Index() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignInGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      navigate('/'); // Redirect to the home page after successful login
      console.log(res)
    });
  }
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing");
      setLoading(false);
      // Clear the error message after 3 seconds
      // setTimeout(() => {
      //   setError('');
      // }, 3000);
    } else {
      createUserWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res);
        setLoading(false);
        navigate('/'); // Redirect to the home page after successful registration
      }).catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
        // Clear the error message after 3 seconds
        // setTimeout(() => {
        //   setError('');
        // }, 3000);
      })
    }
  }
  const handleSignIn = (e) => { 
    e.preventDefault();
    setLoading(true);
    setError("");
    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);
      // Clear the error message after 3 seconds
      // setTimeout(() => {
      //   setError('');
      // }, 3000);
    } else {
      signInWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res);
        setLoading(false);
        navigate('/'); // Redirect to the home page after successful login
      }).catch((error) => {
        console.log(error.code);
        setError(error.message);
        setLoading(false);
        // Clear the error message after 3 seconds
        // setTimeout(() => {
        //   setError('');
        // }, 3000);
      });
    }
  }
  

  return (
    <div className="auth">
      <div className="auth-container">
      <p>{register ? "Sign Up" : "Sign In"}</p>
        <div className="signin-options">
          <div onClick={handleSignInGoogle} className="signin-option">
            <img src={google_logo} alt="google" />
            <p>Sign {register ? "Up" : "In"} with Google</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
          {error && <div className="auth-error">{error}</div>}
            {register ? (
              <>
                <div className="input-field">
                  <p>Username</p>
                  <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                </div>
                <button onClick={handleRegister} disabled={loading}>{loading? 'Creating account....': 'Register'}</button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                </div>
                  <button onClick={handleSignIn} disabled={loading}> {loading? 'Signing in....': 'Login'}</button>
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
