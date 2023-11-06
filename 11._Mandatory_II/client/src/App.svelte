<script>
  import { Router, Link, Route } from "svelte-navigator";
  import NavBar from './components/NavBar.svelte';
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
  import SignUp from "./pages/SignUp/SignUp.svelte";
</script>

<Router>

  <NavBar {Link}/> <!-- Any link from NavBar comes in here.  -->

  <div>
    <Route path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={SignUp}></Route>
  </div>

</Router>
