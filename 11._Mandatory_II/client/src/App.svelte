<script>
  import { Router, Link, Route } from "svelte-navigator";
  import LoginHome from "./pages/LoginHome/LoginHome.svelte";
  import NavBar from './components/NavBar.svelte';
  import SignUp from "./pages/SignUp/SignUp.svelte";
</script>

<Router>

  <NavBar {Link}/> <!-- Any link from NavBar comes in here.  -->

  <div>
    <Route path="/" component={LoginHome}></Route>
    <Route path="/signup" component={SignUp}></Route>
  </div>

</Router>

<main>


</main>