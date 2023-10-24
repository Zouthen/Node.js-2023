<script>
    import { Router, Link, Route } from "svelte-navigator";
    
    import Home from "./pages/Home/Home.svelte";
    import CoffeeFatcs from "./pages/CoffeeFacts/CoffeeFatcs.svelte";
    import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/coffeetypes">Coffe Overview</Link>
        <Link to="/coffeefacts">Coffee Facts</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/coffeetypes"><CoffeeOverview/></Route>
        <Route path="/coffeefacts"><CoffeeFatcs/></Route>
    </div>

</Router>
    