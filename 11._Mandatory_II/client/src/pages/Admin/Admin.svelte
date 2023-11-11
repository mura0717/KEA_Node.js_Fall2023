<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../store/global.js";
  import { user } from "../../store/usersStore.js";
  import toast, { Toaster } from "svelte-french-toast";

  let allUsers = "";
  let userId = "";
  let userName = "";
  let userEmail = "";
  let userStatus = false;

  onMount(() => {
    userId = $user.id;
    userName = $user.name;
    userEmail = $user.email;
    if ($user.isAdmin === 1) {
      userStatus = true;
    }
  });

  async function getAllUsers() {
    try {
      console.log("before fetch");
      const response = await fetch($BASE_URL + "/api/auth/admin", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("after fetch");
      if (!response.ok) {
        console.log(response.status);
      }
      console.log(response);
      const fetchedResults = (await response.json()).allUsersObj;
      console.log(fetchedResults);
      allUsers = fetchedResults.data;
      console.log(allUsers);
    } catch (error) {
      console.log(error);
      toast("No users yet!", {
        icon: "😢",
      });
    }
  }
</script>

<Toaster />

<section class="bg-neutral-200 dark:bg-neutral-700">
  <div class="container p-10">
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
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="inline-block w-full rounded bg-neutral-700 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      on:click={getAllUsers}
                    >
                      See All Users
                    </button>
                  </div>
                </div>

                <div data-te-datatable-init>
                  <table id="users-table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>isAdmin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each allUsers as user}
                        <tr>
                          <td>{userId}</td>
                          <td>{userName}</td>
                          <td>{userEmail}</td>
                          <td>{userStatus}</td>
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
