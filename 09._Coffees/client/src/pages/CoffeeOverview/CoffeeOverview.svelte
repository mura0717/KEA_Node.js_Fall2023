<script>
    import { onMount } from "svelte";

    let coffees = [];
    onMount(async () => {
        const response = await fetch("http://localhost:8080/coffees");
        const result = await response.json();
        coffees = result.data;
    })

</script>

<h1>Cofee Selection</h1>

{#each coffees as coffee}
    <h3>{coffee}</h3>
{/each}