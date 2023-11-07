<script>
    import { BASE_URL } from "../../store/global.js";
    import { navigate } from "svelte-navigator";

    let coffeeLoverName;

    async function submitCoffeLoverName() {
        const response = await fetch($BASE_URL + "/api/coffeeLovers", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ coffeeLover: coffeeLoverName })
        });
        // const result = await response.json();
        if (response.status === 200) {
            navigate("/whodatcoffeeloverssr");
        }
    }

</script>

<input bind:value={coffeeLoverName}>
<button on:click={submitCoffeLoverName}>Submit your name</button>
