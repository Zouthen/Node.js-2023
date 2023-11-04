<script>
    import { onMount } from "svelte";

    let potterheadName = "";
    onMount(async () => {
        const response = await fetch("http://localhost:8080/users", {
            credentials: "include"})
        const result = await response.json();
        potterheadName = result.data;
    })
</script>

<h1>{potterheadName} loves Potter!</h1>