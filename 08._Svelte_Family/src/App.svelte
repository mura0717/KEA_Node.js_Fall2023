<script>
  import Home from "./components/Home/Home.svelte"
  import Parent from "./components/Parent/Parent.svelte"

  const parents = ["Johnny", "Joanna"];
  const children = [
    {
      name: "Gustav",
      blackSheep: "medium-black-sheep"
    },
    {
      name: "Sarah",
      isGirl: true,
    },
    {
      name: "Alexander",
      blackSheep: "ultra-black-sheep"
    }
  ]
</script>


<Home>
  <h5>Welcome message above the door.</h5>

   <Parent parentName={parents[0]} myChildren={children} />
   <Parent parentName={parents[1]} myChildren={children} />
   

   <!-- {#each parents as parentName}
       <Parent name={parentName} children={children} />
   {/each} -->

</Home>