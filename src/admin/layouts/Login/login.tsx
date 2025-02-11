import React , { useEffect, useState } from "react";
import styles from './login.module.css';
import { Link, useHistory } from "react-router-dom";
import { auth, FireBasesignInWithEmailAndPassword, signInWithGoogle } from '@src/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Login:React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) history.replace("/dashboard");
    }, [user, loading]);
    return (
      <div className={styles.login}>
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            onClick={() => FireBasesignInWithEmailAndPassword({email, password})}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>

        </div>
      </div>
    );
  }



export default Login
