import { createContext, useContext, useState } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();

export function AuthProvider ({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");



  // TODO: signup
  async function signup (username) {
  try {
    const response = await fetch(API + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "some-username", 
        password: "super-secret-999" 
      }),
    });
    const result = await response.json();
    console.log(result);
  }catch(error) {
     console.error("oh no;("); 
    }
  }

  // TODO: authenticate

  async function authenticate(token) {
  try {

    const response = await fetch(API + "/authenticate", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);

  return result.token;
  } catch (e) {
    console.error("oh no ;(");
  }
}


  const value = {signup, location };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
