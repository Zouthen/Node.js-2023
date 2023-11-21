<script>
  import Colors from "./pages/Colors/Colors.svelte";
  import Register from "./pages/Register/Register.svelte";
  import { BASE_URL } from "./stores/globalStore.js";
  import { currentUser } from "./stores/usersStore.js";

  import { onMount } from "svelte";

/*   onMount(async () => {
    const currentUserLocalStorage =localStorage.getItem("currentUser");
    if (currentUserLocalStorage) {
      console.log(currentUserLocalStorage);
      currentUser.set(currentUserLocalStorage);
    } else {
      const response = await fetch($BASE_URL + "/api/users", {
        credentials: "include"
      });
      const result = await response.json();
      localStorage.setItem("currentUser", result.data);
      currentUser.set(result.data);
    }
  }); */
</script>

{#if !$currentUser}
  <Register/>
{:else}
  <Colors/>
{/if}