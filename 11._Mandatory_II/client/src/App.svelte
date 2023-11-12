<script>
  import { Router, Link, Route } from "svelte-navigator";
  import NavBar from './components/navbar/NavBar.svelte';
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
  import SignUp from "./pages/SignUp/SignUp.svelte";
  import ForgotPassword from "./pages/ForgetPassword/ForgotPassword.svelte";
  import Terms from "./pages/Terms/Terms.svelte";

  import PrivateRoute from "./components/privateRoutes/PrivateRoute.svelte";
  import UserProfile from "./pages/UserProfile/UserProfile.svelte";
  import Admin from "./pages/Admin/Admin.svelte";
  import Secret from "./pages/Secret/Secret.svelte";
  
</script>

<Router>
  <NavBar {Link}/> <!-- NavBar comes in here.  -->

  <div>
    <!-- Public Routes -->
    <Route path="/" component={Home}></Route>
    <Route path="/auth/signup" component={SignUp}></Route>
    <Route path="/auth/login" component={Login}></Route>
    <Route path="/auth/login/forgotpassword" component={ForgotPassword}></Route>
    <Route path="/auth/signup/terms" component={Terms}></Route>
    
    <!-- Private Routes -->
    <PrivateRoute path="/auth/user/profile" let:location>
      <UserProfile></UserProfile>
    </PrivateRoute>
    <PrivateRoute path="/auth/admin" let:location>
      <Admin></Admin>
    </PrivateRoute>
    <PrivateRoute path="/auth/admin/secret" let:location>
      <Secret></Secret>
    </PrivateRoute>
  </div>

</Router>
