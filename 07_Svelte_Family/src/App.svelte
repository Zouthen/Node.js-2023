<script>
  import Home from './components/Home/Home.svelte';
    import Parent from './components/Parent/Parent.svelte';

  const parents = ["Anders", "Karoline",];
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
  ];
</script>

<h4>Welcome message above the door</h4>

<Home>

  <!-- task solve below without looping -->
  <Parent name={parents[0]} myChildren={children} />
  <Parent name={parents[1]} myChildren={children} />

  <!-- {#each parents as parentName}
    <Parent name={parentName} children={children} />
  {/each} -->

</Home>
