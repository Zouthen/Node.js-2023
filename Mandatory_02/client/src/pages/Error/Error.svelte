<style>
    h3:focus{
       outline:auto; 
    }
</style>
<script>
    import { onMount } from 'svelte';
    
    let url = "";
    onMount(() => url = window.location.href);
    

</script>
<h3>404 - Siden findes ikke:</h3>
<p>{url}</p>