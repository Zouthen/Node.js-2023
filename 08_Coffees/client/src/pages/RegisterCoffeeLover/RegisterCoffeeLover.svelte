<script>
    import { navigate } from "svelte-navigator";

    let coffeeLoverName = "";

    async function submitCoffeeLoverName() {
        const response = await fetch ("http://localhost:8080/users" + coffeeLoverName, {
            credentials: "include"
        })
        const result = await response.json();
        navigate("/whodatcoffeelover");

    }
</script>

<input bind:value={coffeeLoverName}>
<button on:click={submitCoffeeLoverName}>Submit your name</button>