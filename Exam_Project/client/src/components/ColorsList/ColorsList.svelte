<script>
    import { colorsList } from "../../Stores/colorsStore";

    let colorListItems = [];

    $: {
        colorListItems = $colorsList;
    }
</script>

{#each colorListItems as colorListItem (colorListItem.color)}
    <h4 style="font-family: Arial; background-color: {colorListItem.color}">{colorListItem.name}</h4>
{/each}
