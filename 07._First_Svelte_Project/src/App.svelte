<script>
  import Tractor from "./lib/Tractor.svelte";
  import Ground from "./lib/Ground.svelte";
  import Farmer from "./lib/Farmer.svelte";

  const wheels = ["🔘", "🔘", "🔘", "🔘"]
  const showTractor = true;
  const welcomeMessage = "Welcome to our first project.";

  const farmerName = "Farmer John";
</script>

<h1 id="welcome-message">{welcomeMessage}</h1>
<h2>This is the main component.</h2>

<Farmer name= {farmerName} />

{#if showTractor}
  <Tractor wheels={wheels}/>
  <Ground/>
{/if}

<style>
  #welcome-message {
    color: aquamarine;
  }
</style>