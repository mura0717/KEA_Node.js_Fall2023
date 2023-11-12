<script>
    import { BASE_URL } from "../../store/global.js";
    import toast, { Toaster } from "svelte-french-toast";
  
    let allUsers = [];
  
    async function getAllUsers() {
      try {
        const response = await fetch($BASE_URL + "/api/auth/admin", {
          credentials: "include",
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch users. Status: ${response.status}`);
        }
        const fetchedResults = await response.json();
        allUsers = fetchedResults.data;
      } catch (error) {
        toast("Error fetching users", {
          icon: "😢",
        });
        throw new Error("Error fetching users:", error);
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
              <div class="container my-12 md:px-72">
                <section class="mb-25 text-center">
                  <h2 class=" mb-6 text-3xl font-bold outline-none">
                    Forgot Password?
                  </h2>
  
                  <figure class="max-w-lg">
                    <iframe
                      src="https://giphy.com/embed/FgjKGypLCAety"
                      width="480"
                      height="362"
                      frameBorder="1"
                      class="max-h-full max-w-xl rounded-lg border"
                      allowFullScreen
                      title=""
                    />
                  </figure>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  