<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import CoffeeFacts from "./pages/CoffeeFacts/CoffeeFacts.svelte";
  import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/coffeeoverview">Coffe Overview</Link>
    <Link to="/coffeefacts">Coffee Facts</Link>
  </nav>

  <div>
    <Route path="/" component={Home}></Route>
    <Route path="/coffeeoverview" component={CoffeeOverview}></Route>
    <Route path="/coffeefacts" component={CoffeeFacts}></Route>
  </div>
</Router>
