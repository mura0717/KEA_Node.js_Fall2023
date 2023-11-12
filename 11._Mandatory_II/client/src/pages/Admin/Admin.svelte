<script>
  import toast, { Toaster } from "svelte-french-toast";
  import { getRequest } from "../../store/fetchStore.js";

  let allUsers = [];

  async function getAllUsers() {
    try {
      const fetchedResults = await getRequest("/api/auth/admin")
      allUsers = fetchedResults.data
    } catch (error) {
      toast("Error fetching users", {
        icon: "😢",
      });
    }
  }
</script>

<Toaster />

<section class="bg-neutral-200 dark:bg-neutral-700">
  <div class="container w-full p-5">
    <div
      class="g-6 h-full flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
    >
      <div class="w-full block rounded-lg">
        <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div class="g-0 lg:flex lg:flex-wrap">
            <div
              class="container min-h-[62vh] my-12 md:px-96"
            >
              <section class="mb-32 text-center">
                <h2 class="text-3xl font-bold outline-none">Admin Page</h2>
                <div class="mt-9">
                  <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="inline-block rounded bg-neutral-700 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      on:click={getAllUsers}
                    >
                      See All Users
                    </button>
                  </div>
                </div>
                <div data-te-datatable-init class="my-6 flex justify-center">
                  <table
                    id="users-table"
                    class="table-fixed border border-gray-300"
                  >
                    <thead>
                      <tr class="border-b">
                        <th class="px-6 py-2">Id</th>
                        <th class="px-6 py-2">Name</th>
                        <th class="px-6 py-2">Email</th>
                        <th class="px-6 py-2">Admin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each allUsers as user}
                        <tr class="border-b">
                          <td class="px-6 py-2 border-r">{user.id}</td>
                          <td class="px-6 py-2 border-r">{user.name}</td>
                          <td class="px-6 py-2 border-r">{user.email}</td>
                          <td class="px-6 py-2 border-r"
                            >{Number(user.isAdmin) === 1 ? "yes" : "no"}</td
                          >
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
