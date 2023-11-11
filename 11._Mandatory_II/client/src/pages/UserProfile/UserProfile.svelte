<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../store/global.js";
  import { user } from "../../store/usersStore.js";
  import toast, { Toaster } from "svelte-french-toast";

  let userName = "";
  let message = "";

  onMount(() => {
    userName = $user.name;
  });

  async function handleMessageSubmit() {
    console.log("Send clicked.");
    if (!message) {
      toast.error("No empty messages.");
      return;
    }
    const response = await fetch($BASE_URL + "/api/auth/user/profile/contact", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    if (response.status === 200) {
      toast.success("Thank you for contacting us.");
    } else {
      console.log("Error Status: ", response.status);
      toast.error("Error sending message.");
    }
    message = "";
  }
</script>

<Toaster />

<section class="bg-neutral-200 dark:bg-neutral-700">
  <div class="container w-full p-8">
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
    >
      <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
        <div class="g-0 lg:flex lg:flex-wrap">
          <div
            class="container min-h-screen min-w-screen my-12 mx-auto md:px-96"
          >
            <section class="mb-32 text-center">
              <h2 class="mb-3 text-3xl font-bold outline-none">
                Welcome " {userName} "
              </h2>
              <h5 class="mb-12 outline-none">
                Use the form below to contact us.
              </h5>
              <div class="container mx-auto md:px-12">
                <div
                  class="mx-auto max-w-[700px] flex justify-center items-center"
                >
                  <form action="/auth/user/profile/sendMessage" method="POST">
                    <div class="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        class="peer block min-h-[auto] ml-[-188px] px-6 bg-neutral-200 dark:bg-neutral-700 rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] outline-none"
                        id="text-message"
                        cols="30"
                        rows="10"
                        placeholder="Your message"
                        style="width: 400%; padding: 15px;"
                        bind:value={message}
                      />
                    </div>
                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      class="inline-block w-full rounded bg-neutral-700 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      on:click={handleMessageSubmit}
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
