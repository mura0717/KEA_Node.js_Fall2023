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
                  <div class="mb-6 p-6">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                      <h5 class="mb-4 text-lg font-bold">My Reminders:</h5>
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
