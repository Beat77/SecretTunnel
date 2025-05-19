/** Users can enter their name to receive a token from the API. */
import { useAuth } from "./AuthContext";
import { useState } from "react";

function UserName() {
  const [userName, setuserName] = useState("");
}


export default function Entrance() {
  const {signUp} = useAuth()
}

  // TODO: call signup when form is submitted
  
  
  
  
  return (
    <>
      <h1>Cave Entrance</h1>
      <p>Your journey has brought you to the base of a rocky mountain.</p>
      <p>
        The quickest path forward is through the mountain's winding tunnels, but
        a sturdy metal gate sits closed before you.
      </p>
      <p>
        Two giant badgers stand guard on either side of the gate, their eyes
        fixed on you. The one on the left opens its mouth, and with a deep,
      
      
        rumbling voice, it asks, "Who approaches? Speak your name."
      //form action is going to be a function when the button is pushed 
      that needs to get the value in the name input and the value is passed to 
      the signup function and the name is passed in as the argument
      to the signup
        
      
      
      </p>
      <form action= {signUp}>
        <label>
          Name
          <input name = "username" type="text"/>
        </label>
        <button>Respond</button>
      </form>
      
    </>

  );

}


