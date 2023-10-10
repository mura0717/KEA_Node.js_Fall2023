<script>
    export let child;
    export let onShowLove;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessages";

    let customFridgeMessage = "";

    function submitFridgeMessage(){
        fridgeMessages.set([...$fridgeMessages, customFridgeMessage]); //this line does what below does
        /* fridgeMessages.update((storeValue) => {  //otherwise the messages overwrite
            storeValue.push(customFridgeMessage);
            return storeValue;
            return [...$fridgeMessages, customFridgeMessage];
            //console.log("Store Value: ", storeValue)
        }); */
        customFridgeMessage = "";
    }

</script>

<button on:click={() => onShowLove(child.name)}>Love Parent 💚</button>
<button on:click={onEatCookie}>Eat 🍪</button>
<br>
<input placeholder="Write a fridege message" bind:value={customFridgeMessage}>
<button on:click={submitFridgeMessage}>Submit Fridge Message</button>

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


