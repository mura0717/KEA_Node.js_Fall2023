<script>
    
    export let parentName;
    export let myChildren;

    import Child from "../Child/Child.svelte"
    import { fridgeMessages } from "../../store/fridgeMessages";

    $: cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];

    function handleShowLove(childName) {
        console.log(`My name is ${parentName} and ${childName} loves me.`);
    }

    function handleEatCookie (childName) {
        cookieJar.pop(); //removes one element from an array.
        cookieJar = cookieJar; // updates the html element with the right mount of cookies. 
        console.log(cookieJar);
        if (cookieJar.length === 0) {
            fillCookieJar();
        }
    }

    function fillCookieJar() {
        cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];
    }

    function eraseFridgeMessage() {
        fridgeMessages.set(["Fridge Messages Below"]);
    }


</script>

<h1>{parentName}</h1>

<p>{cookieJar}</p>

<button on:click={eraseFridgeMessage}>Erase Message</button>
<br>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}