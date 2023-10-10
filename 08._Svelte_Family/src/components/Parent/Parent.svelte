<script>
    import Child from "../Child/Child.svelte"

    export let parentName;
    export let myChildren;

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

</script>

<h1>{parentName}</h1>

<p>{cookieJar}</p>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}