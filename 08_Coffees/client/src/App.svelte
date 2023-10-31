<script>
    import { Router, Link, Route } from "svelte-navigator";
    
    import Home from "./pages/Home/Home.svelte";
    import CoffeeFatcs from "./pages/CoffeeFacts/CoffeeFatcs.svelte";
    import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
    import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";
    import WhoDatCoffeeLover from "./pages/WhoDatCoffeeLover/WhoDatCoffeeLover.svelte";

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/coffeetypes">Coffe Overview</Link>
        <Link to="/coffeefacts">Coffee Facts</Link>
        <Link to="/registercoffeelover">Register Coffee Lover</Link>
        <Link to="/whodatcoffeelover">WhoDatCoffeeLover</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/coffeetypes"><CoffeeOverview/></Route>
        <Route path="/coffeefacts"><CoffeeFatcs/></Route>
        <Route path="/registercoffeelover"><RegisterCoffeeLover/></Route>
        <Route path="/whodatcoffeelover"><WhoDatCoffeeLover/></Route>
    </div>

</Router>
    