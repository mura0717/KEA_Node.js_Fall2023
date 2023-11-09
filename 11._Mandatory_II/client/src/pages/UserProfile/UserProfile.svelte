<script>
  import { navigate } from "svelte-navigator";

  function goToSecret() {
    navigate("/auth/user/secret");
  }
</script>

<div class="container min-h-screen min-w-screen my-12 mx-auto md:px-48">
  <!-- Section: Design Block -->
  <section class="mb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold outline-none">Your Profile Page</h2>
    <div class="grid gap-x-6 md:grid-cols-2 lg:gap-x-96">
      <div class="mb-6 lg:mb-0" style="width: 250px; height: 300px;">
        <div
          class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://www.freeiconspng.com/uploads/profile-icon-9.png"
              width="350"
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
        </div>
      </div>
      <div class="mb-6 p-6">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <h5 class="mb-4 text-lg font-bold">Name</h5>
          <h5 class="mb-4 text-lg font-bold">Email</h5>
        </div>
      </div>
    </div>
  </section>
</div>
