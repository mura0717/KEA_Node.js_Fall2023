<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import CoffeeFacts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
  import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
  import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";
  import WhoDatCoffeeLover from "./pages/WhoDatCoffeeLover/WhoDatCoffeeLover.svelte";
  import RegisterCoffeeLoverSSR from "./pages/RegisterCoffeeLoverSSR/RegisterCoffeeLoverSSR.svelte";
  import WhoDatCoffeeLoverSSR from "./pages/WhoDatCoffeeLoverSSR/WhoDatCoffeeLoverSSR.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/coffeeoverview">Coffe Overview</Link>
    <Link to="/coffeefacts">Coffee Facts</Link>
    <Link to="/registercoffeelover">Register Coffee Lover</Link>
    <Link to="/whodatcoffeelover">WhoDatCoffeeLover </Link>
    <Link to="/registercoffeeloverssr">Register Coffee Lover SSR</Link>
    <Link to="/whodatcoffeeloverssr">WhoDatCoffeeLover SSR</Link>
  </nav>

  <div>
    <Route path="/" component={Home}></Route>
    <Route path="/coffeeoverview" component={CoffeeOverview}></Route>
    <Route path="/coffeefacts" component={CoffeeFacts}></Route>
    <Route path="/registercoffeelover" component={RegisterCoffeeLover}></Route>
    <Route path="/whodatcoffeelover" component={WhoDatCoffeeLover}></Route>
    <Route path="/registercoffeeloverssr" component={RegisterCoffeeLoverSSR}></Route>
    <Route path="/whodatcoffeeloverssr" component={WhoDatCoffeeLoverSSR}></Route>
  </div>
</Router>
