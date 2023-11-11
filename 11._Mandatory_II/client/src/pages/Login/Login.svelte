<script>
	import { BASE_URL } from "../../store/global.js";
  import { navigate } from "svelte-navigator";
  import toast, { Toaster } from "svelte-french-toast";
  import { updateLoginStatus } from "../../store/loginStatus.js";
  import {user} from "../../store/usersStore.js"

  let email = "";
  let password = "";

  function goToSignUp() {
    navigate("/auth/signup");
  }

  async function handleLogin() {
    if (!email || !password) {
      toast.error("No empty fields.");
      return;
    }
    const response = await fetch($BASE_URL + "/api/auth/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: { email, password },
      }),
    });
    if (response.status === 200) {
      console.log(response)
      const userObj = (await response.json()).userObj;
      user.set(userObj)
      updateLoginStatus();
      if ($user.isAdmin == 0) {
        toast.success("User login success.");
      setTimeout(() => {
        navigate("/auth/user/profile");
      }, 1000);
      } else if ($user.isAdmin == 1){
        toast.success("Admin login success.");
      setTimeout(() => {
      navigate("/auth/admin");
    }, 1000);
      }
    } else {
      console.log(response.status);
      updateLoginStatus();
      toast.error("Incorrect credentials.");
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  }
  
</script>

<Toaster />

<section class="bg-neutral-200 dark:bg-neutral-700">
  <div class="container w-full p-5">
    <div
      class="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
    >
      <div class="w-full">
        <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div class="g-0 lg:flex lg:flex-wrap">
            <!-- Left column container-->
            <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6 md:p-12">
                <!--Logo-->
                <div class="text-center mt-3 mb-9">
                  <img
                    class="mx-auto w-36"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="logo"
                  />
                  <h4
                    class="mb-12 mt-1 pb-1 text-xl font-semibold outline-none"
                  >
                    Welcome to Login Page
                  </h4>
                </div>
                <form>
                  <p class="mb-4">Please login to your account</p>
                  <!--Email input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="email"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-neutral-1 px-3 py-[0.32rem] leading-[1.6] outline-none"
                      id="email-input"
                      placeholder="Email"
                      bind:value={email}
                    />
                  </div>
                  <!--Password input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-neutral-1 px-3 py-[0.32rem] leading-[1.6] outline-none"
                      id="password-input"
                      placeholder="Password"
                      bind:value={password}
                    />
                  </div>
                  <!--Submit button-->
                  <div class="mb-12 pb-1 pt-1 text-center">
                    <button
                      class="mb-3 inline-block w-full rounded border-0 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      style="
                          background: linear-gradient(to left, #ff499e, #d264b6, #a480cf, #779be7, #49b6ff);"
                      on:click|preventDefault={handleLogin}
                    >
                      Log in
                    </button>
                    <!--Forgot password link-->
                    <a
                      href="https://media.giphy.com/media/FgjKGypLCAety/giphy.gif"
                      target="_blank">Forgot password?</a
                    >
                  </div>
                  <!--Register button-->
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      on:click={goToSignUp}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!-- Right column container with background and description-->
            <div
              class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              style="background: linear-gradient(to left, #ff499e, #d264b6, #a480cf, #779be7, #49b6ff)"
            >
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  class="w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
