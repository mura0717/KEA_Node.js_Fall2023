<script>
  import { navigate } from "svelte-navigator";

  function getAllUsers() {
    // populate table from db
  }
</script>

<section
  class="gradient-form bg-neutral-200 dark:bg-neutral-700"
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
                  Admin Page
                </h2>
                  <div class="mb-6 mt-12">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat">
                      <button
                        type="button"
                        class="text-lg font-bold"
                        on:click={getAllUsers}
                      >
                        See All Users
                      </button>
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
