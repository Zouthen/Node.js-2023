<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../../stores.js";

    import toastr from "toastr";
    import "toastr/build/toastr.css";
  
    const navigate = useNavigate();
    const location = useLocation();
  
    let email = "";
    let password = "";
  
    async function handleSignUp(event) {
      event.preventDefault();
      try {
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        };
  
        // @ts-ignore
        const response = await fetch("http://localhost:8080/auth/signup", options);
  
        if (response.ok) {
          toastr.info("Sign Up successful");
          const data = await response.json();
          localStorage.setItem("userId", data.userData.user.uid);
          $user = { email, password };
          const from = ($location.state && $location.state.from) || "/";
          navigate(from, { replace: true });
        } else {
          toastr.error("Sign Up failed");
          console.log("SignUp failed");
        }
      } catch (error) {
        console.log("Error occured", error);
      }
    }
  </script>
  <h1>Sign Up</h1>
  <form on:submit={(event) => handleSignUp(event)}>
    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      placeholder="Your email"
      bind:value={email}
      required
    />
  
    <br />
  
    <label for="password">Password:</label>
    <input
      type="password"
      name="password"
      placeholder="Your password"
      bind:value={password}
      required
    />
  
    <br /><br />
  
    <button type="submit">SignUp</button>
  </form>