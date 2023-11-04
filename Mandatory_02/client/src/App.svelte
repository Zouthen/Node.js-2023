<script>
    import { Router, Link, Route } from "svelte-navigator";
    
    import Home from "./pages/Home/Home.svelte";
    import FantasticBeasts from "./pages/FantasticBeasts/FantasticBeasts.svelte";
    import PotterFacts from "./pages/PotterFacts/PotterFacts.svelte";
    import RegisterPotterhead from "./pages/RegisterPotterhead/RegisterPotterhead.svelte";
    import WhoDatPotterhead from "./pages/WhoDatPotterhead/WhoDatPotterhead.svelte";

</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/fantasticbeasts">Fantastic Beasts</Link>
        <Link to="/potterfacts">Potter Facts</Link>
        <Link to="/registerpotterhead">Register Potterhead</Link>
        <Link to="/whodatpotterhead">WhoDatPotterhead</Link>
    </nav>

    <div>
        <Route path="/" component={Home}></Route>
        <Route path="/fantasticbeasts"><FantasticBeasts/></Route>
        <Route path="/potterfacts"><PotterFacts/></Route>
        <Route path="/registerpotterhead"><RegisterPotterhead/></Route>
        <Route path="/whodatpotterhead"><WhoDatPotterhead/></Route>
    </div>

</Router>
    