<script>
    import { Router, Link, Route } from "svelte-navigator";
    
    import Home from "./pages/Home/Home.svelte";
    import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
    import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";
    import WhoDatCoffeeLover from "./pages/WhoDatCoffeeLover/WhoDatCoffeeLover.svelte";

    import RegisterCoffeeLoverSSR from "./pages/RegisterCoffeeLoverSSR/RegisterCoffeeLoverSSR.svelte";
    import WhoDatCoffeeLoverSSR from "./pages/WhoDatCoffeeLoverSSR/WhoDatCoffeeLoverSSR.svelte";

</script>

<h1>Helloasfasfsa12eqwd12312312</h1>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/coffeetypes">Coffe Overview</Link>
        <Link to="/registercoffeelover">Register Coffee Lover</Link>
        <Link to="/whodatcoffeelover">WhoDatCoffeeLover</Link>
        <Link to="/registercoffeeloverssr">Register Coffee Lover SSR</Link>
        <Link to="/whodatcoffeeloverssr">WhoDatCoffeeLover SSR</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/coffeetypes"><CoffeeOverview/></Route>
        <Route path="/registercoffeelover"><RegisterCoffeeLover/></Route>
        <Route path="/whodatcoffeelover"><WhoDatCoffeeLover/></Route>
        <Route path="/registercoffeeloverssr"><RegisterCoffeeLoverSSR/></Route>
        <Route path="/whodatcoffeeloverssr"><WhoDatCoffeeLoverSSR/></Route>
    </div>

</Router>
    