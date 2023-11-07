<script>
    import { BASE_URL } from "../../store/global.js";
    import { onMount } from "svelte";
    
    let coffeeLoverName;

    onMount(async () => {
        const response = await fetch($BASE_URL + "/api/coffeeLovers", {
            credentials: "include"
        });
        const result = await response.json();
        coffeeLoverName = result.data;
    });

</script>

{#if !coffeeLoverName}
    <h1>Who dis?</h1>
{:else}
    <h1>{coffeeLoverName} loves dat coffee!</h1>
{/if}