<script>
    import ColorsList from "../../components/ColorsList/ColorsList.svelte";
    import { colorsList } from "../../Stores/colorsStore";

    import io from "socket.io-client";
  
    const socket = io("/");
    let color = "#000000";
    
    function chooseColor() {
        socket.emit("client-choose-a-color", { color, name: color });
    }

    socket.on("server-sent-a-color", (data) => {
        colorsList.update((colors) => {
            colors.push({ color: data.color, name: data.name });
            return colors;
        });
    });
</script>

<h1>Colors</h1>

<input type="color" bind:value={color}>
<input type="text" bind:value={color} readonly>
<button on:click={chooseColor}>Choose Color</button>

<ColorsList />
