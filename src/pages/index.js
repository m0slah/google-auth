import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    const res = await signInWithPopup(auth, googleAuth);
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <React.Fragment>
      <div className="home">
        <p>Login with Google!</p>
        <button onClick={login} className="button">Login</button>
        <br/>
        <button onClick={logout} className="button">Logout</button>
        <p>
          {user ? "Welcome: " + user.displayName : "login with google account"}
        </p>
      </div>
    </React.Fragment>
  );
}
