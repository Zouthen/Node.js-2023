<script>
  import Traktor from "./lib/Traktor.svelte";
  import Ground from "./lib/Ground.svelte";
  import Farmer from "./lib/Farmer.svelte";

  const wheels = ["🛞", "🛞", "🛞", "🛞"];
  const showTractor = true;
  const welcomeMessage = "Welcome to our first project";

  const fatherJohnsName = "Farmer John";
</script>

<h1 id="welcome-message">{welcomeMessage}</h1>
<h2>This is the main component</h2>

<Farmer name={fatherJohnsName} />

{#if showTractor}
  <Traktor wheels={wheels} />
{/if}
<Ground /> 

<style>
  #welcome-message {
    color: aquamarine;
  }
</style>