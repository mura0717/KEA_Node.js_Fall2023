<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/LoginHome/LoginHome.svelte";
  import NavBar from './components/NavBar.svelte';
</script>

<Router>

  <NavBar {Link}/>

  <div>
    <Route path="/" component={Home}></Route>
  </div>

</Router>

<main>


</main>