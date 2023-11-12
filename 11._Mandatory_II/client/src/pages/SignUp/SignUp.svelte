<script>
  import { postRequest } from '../../store/fetchStore.js';
  import { navigate } from "svelte-navigator";
  import toast, { Toaster } from "svelte-french-toast";

  let name = "";
  let email = "";
  let password = "";

  function goToTerms() {
    navigate("/auth/signup/terms");
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      toast.error("No empty fields.");
      return;
    }
    try {
      const userData = { newUser: { name, email, password } };
    const response = await postRequest("/api/auth/signup", userData);
      if (response.status === 200) {
        toast.success("Sign up Success.");
        navigate("/auth/login");
      } else {
        toast.error("Error adding new user.");
      }
    } catch (error) {
      throw new Error(`HTTP error! Status: ${error}`);
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
              <div class="md:mx-6 md:p-12 md:px-24">
                <!--Logo-->
                <div class="text-center mt-3 mb-9">
                  <img
                    class="mx-auto w-36"
                    src="https://cdn-icons-png.flaticon.com/512/5728/5728078.png"
                    alt="logo"
                  />
                </div>
                <form>
                  <h5 class="mb-4">Please register an account</h5>
                  <!--Name input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-neutral-1 px-3 py-[0.32rem] leading-[1.6]"
                      id="name-input"
                      placeholder="Your Name"
                      bind:value={name}
                    />
                  </div>
                  <!--Email input-->
                  <div class="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="email"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-neutral-1 px-3 py-[0.32rem] leading-[1.6] outline-none"
                      id="email-input"
                      placeholder="Your Email"
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
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      style="
                          background: linear-gradient(to left, #ff499e, #d264b6, #a480cf, #779be7, #49b6ff);
                        "
                      on:click|preventDefault={handleSignUp}
                    >
                      Sign Up
                    </button>
                    <!--Terms of Service-->
                    <div class="mb-2 block min-h-[1.5rem] pl-[1.5rem]">
                      <div
                        class="inline-block pl-[0.15rem] hover:cursor-pointer"
                      >
                        By signing up, I agree all in
                        <a href={""} on:click={goToTerms}>Terms of service</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!-- Right column container with image-->
            <div
              class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              style="background: linear-gradient(to left, #ff499e, #d264b6, #a480cf, #779be7, #49b6ff)"
            >
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                <img
                  src="https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
                  class="w-screen"
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
