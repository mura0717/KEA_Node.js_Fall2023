<script>
  import { onMount } from "svelte";
  import { user } from "../../store/usersStore.js";

  let userName = "";

  onMount(() => {
    userName = $user.name;
  });
</script>

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
            <div
              class="container min-h-screen min-w-screen my-12 mx-auto md:px-96"
            >
              <section class="mb-32 text-center">
                <h2 class="mb-12 text-3xl font-bold outline-none">
                  {userName}'s Profile Page
                </h2>
                <div class="grid gap-x-6 md:grid-cols-2">
                  <div
                    class="mb-6 lg:mb-0"
                    style="width: 200px; height: 250px;"
                  >
                    <div
                      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    >
                      <div
                        class="relative overflow-hidden bg-cover bg-no-repeat"
                        style="width: 200px; height: 150px;"
                      >
                        <img
                          src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
                          alt=""
                          class="w-full rounded-t-lg"
                        />
                        <svg
                          class="absolute text-white dark:text-neutral-700 left-0 bottom-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 320"
                        >
                          <path
                            fill="currentColor"
                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          />
                        </svg>
                      </div>
                      <div class="p-3">
                        <h5 class="mb-4 text-lg font-bold">
                          Hello "{userName}"
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 p-6">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                      <h5 class="mb-4 text-lg font-bold">Reminders:</h5>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
