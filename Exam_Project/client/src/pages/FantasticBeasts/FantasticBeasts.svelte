<script>
    import { onMount } from "svelte";

    let beasts = [];
    onMount(async () => {
        const response = await fetch("http://localhost:8080/beasts")
        const result = await response.json();
        beasts = result.data;
    });
    
</script>

<h1>Fantastic Beasts</h1>

{#each beasts as beast}
    <h3>{beast}</h3>
{/each} 