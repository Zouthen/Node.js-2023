<script>
    import { Router, Link, Route } from "svelte-navigator";
    
    import Colors from "./pages/Colors/Colors.svelte";

    import Home from "./pages/Home/Home.svelte";
    import FantasticBeasts from "./pages/FantasticBeasts/FantasticBeasts.svelte";
    import PotterFacts from "./pages/PotterFacts/PotterFacts.svelte";
    import ContactUs from "./pages/ContactUs/ContactUs.svelte";

    import User from "./pages/User/User.svelte"
    import Login from "./pages/Login/Login.svelte"
    import Signup from "./pages/Signup/Signup.svelte";
    import Error from "./pages/Error/Error.svelte";
    import PrivateRoute from "./PrivateRoute.svelte";
    import { user } from "./Stores/usersStore";


    if (localStorage.getItem("userId")) {
    user.set({ id: localStorage.getItem('userId') });
  }

async function handleLogout() {

	const options = {
		method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }


  // @ts-ignore
	const response = await fetch("http://localhost:8080/auth/logout", options)
	if (response.ok) {
		user.set(null)
		localStorage.removeItem('userId');		
	} else {
		//toastr...
		console.log("Could not log out")
	}

  
}
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/fantasticbeasts">Fantastic Beasts</Link>
        <span>|</span>
        <Link to="/potterfacts">Potter Facts</Link>
        <span>|</span>
        <Link to="/contactus">Contact Us</Link>

        {#if !$user}
		<span>|</span>
			<Link to="/login">Login</Link>
			<span>|</span>
			<Link to="/signup">Sign Up</Link>
		{:else}
		<span>|</span>
			<Link to="/user">User</Link>
			<span>|</span>
      <Link to="/colors">Colors</Link>
      <span>|</span>
			<a href="/" on:click={handleLogout}>Log out</a>
		{/if}
    
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/fantasticbeasts"><FantasticBeasts/></Route>
        <Route path="/potterfacts"><PotterFacts/></Route>
        <Route path="/contactus"><ContactUs/></Route>
        <Route path="/login"><Login /></Route>
		    <Route path="/signup"><Signup /></Route>
		    <PrivateRoute path="/user" let:location><User /></PrivateRoute>
        <Route path="/colors"><Colors /></Route>
        <Route path="*"><Error /></Route>
    </div>

</Router>
    