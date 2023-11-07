<script>
    import { BASE_URL } from "../../store/global.js";
    import { navigate } from "svelte-navigator";

    let coffeeLoverName;

    async function submitCoffeeLoverName() {
        const response = await fetch ($BASE_URL + "/api/coffeeLovers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ coffeeLover: coffeeLoverName })
        })
        //const result = await response.json();
        //console.log(result);
        if (response.status === 200) {
            navigate("/whodatcoffeelover");
        }
    }
</script>

<input bind:value={coffeeLoverName}>
<button on:click={submitCoffeeLoverName}>Submit your name</button>