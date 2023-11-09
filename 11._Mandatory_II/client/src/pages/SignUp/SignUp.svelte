<script>
	import { BASE_URL } from "../../store/global.js";
  import { navigate } from "svelte-navigator";
	import toast, { Toaster } from 'svelte-french-toast';

  let name = '';
  let email = '';
  let password = '';

  async function handleSignUp() {
    if (!name || !email || !password) {
      toast.error("No empty fields.");
    }
    const response = await fetch($BASE_URL + "/api/auth/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        newUser:{ name, email, password }
      })
    });

    if (response.status === 200) {
      toast.success("User added successfully.");
      navigate("/auth/login");
    } else {
      toast.error("Error adding new user.");
    }
  }
</script>

<Toaster />

<section
  class="gradient-form min-h-screen min-w-screen bg-neutral-200 dark:bg-neutral-700"
>
  <div class="container h-full p-10">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
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
                    src="https://cdn-icons-png.flaticon.com/512/5728/5728078.png"
                    alt="logo"
                  />
                </div>
                <form>
                  <p class="mb-4">Please register an account</p>
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
                        By signing up, I agree all in <a
                          href="https://i.imgur.com/EZVDzF2.jpeg"
                          target="_blank">Terms of service</a
                        >
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
