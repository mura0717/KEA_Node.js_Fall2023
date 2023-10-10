<script>
    export let child;
    export let onShowLove;
    export let onEatCookie;

</script>

<button on:click={() => onShowLove(child.name)}>💚</button>
<button on:click={() => onEatCookie(child.name)}>🍪</button>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.blackSheep || "not-a-black-sheep"}
>
    <h3>{child.name}</h3>
</div>

<style>
    .is-girl{
        border: 1px solid pink;
    }

    .is-boy{
        border: 1px solid blue;
    }
    .not-a-black-sheep {
        background-color: aquamarine;
    }

    .medium-black-sheep {
        background-color: blueviolet;
    }

    .ultra-black-sheep {
        background-color: brown;
    }
</style>


