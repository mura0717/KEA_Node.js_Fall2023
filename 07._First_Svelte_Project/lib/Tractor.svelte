<script>
    export let wheels;
</script>

<h1>Tractor</h1>
<p>
{#each wheels as wheel}
    <p>{wheel}</p>
{/each}
</p>