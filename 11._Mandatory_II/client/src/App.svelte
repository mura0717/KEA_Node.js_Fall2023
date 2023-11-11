<script>
  import { Router, Link, Route } from "svelte-navigator";
  import NavBar from './components/NavBar.svelte';
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
  import SignUp from "./pages/SignUp/SignUp.svelte";
  import UserProfile from "./pages/UserProfile/UserProfile.svelte";
  import Admin from "./pages/Admin/Admin.svelte";
  import PrivateRoute from "./components/privateRoutes/PrivateRoute.svelte";
</script>

<Router>
  <NavBar {Link}/> <!-- NavBar comes in here.  -->

  <div>
    <!-- Public Routes -->
    <Route path="/" component={Home}></Route>
    <Route path="/auth/login" component={Login}></Route>
    <Route path="/auth/signup" component={SignUp}></Route>
    <!-- Private Routes -->
    <PrivateRoute path="/auth/user/profile" let:location>
      <UserProfile></UserProfile>
    </PrivateRoute>
    <PrivateRoute path="/auth/admin" let:location>
      <Admin></Admin>
    </PrivateRoute>

  </div>

</Router>
