<script>
    import { onMount } from "svelte";

    let potterfacts = [];
    onMount(async () => {
        const response = await fetch("http://localhost:8080/potterfacts");
        const result = await response.json();
        potterfacts = result.data;
    });
</script>

<h1>Harry Potter Facts</h1>

{#each potterfacts as potterfact}
    <h3>{potterfact}</h3>
{/each}
