<script>
    import { navigate } from "svelte-navigator";

    let potterheadName = "";

    async function submitPotterheadName() {
        const response = await fetch ("http://localhost:8080/users" + potterheadName, {
            credentials: "include"
        })
        const result = await response.json();
        navigate("/whodatpotterhead");

    }
</script>

<input bind:value={potterheadName}>
<button on:click={submitPotterheadName}>Submit your name</button>