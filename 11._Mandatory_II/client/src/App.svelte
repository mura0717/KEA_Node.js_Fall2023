<script>
  import { Router, Link, Route } from "svelte-navigator";
  import NavBar from './components/NavBar.svelte';
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
  import SignUp from "./pages/SignUp/SignUp.svelte";
  import UserProfile from "./pages/UserProfile/UserProfile.svelte";
  import AdminProfile from "./pages/AdminProfile/AdminProfile.svelte";
  import Secret from "./pages/Secret/Secret.svelte"
</script>

<Router>
  <NavBar {Link}/> <!-- NavBar comes in here.  -->

  <div>
    <Route path="/" component={Home}></Route>
    <Route path="/auth/login" component={Login}></Route>
    <Route path="/auth/signup" component={SignUp}></Route>
    <Route path="/auth/user/profile" component={UserProfile}></Route>
    <Route path="/auth/admin" component={AdminProfile}></Route>
    <Route path="/auth/admin/secret" component={Secret}></Route>
  </div>

</Router>
