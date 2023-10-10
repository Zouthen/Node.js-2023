<script>
    export let child;
    export let onShowLove;
    export let onEatCookie;

    import { fridgeMessages } from "../../store/fridgeMessages";

    let customFridgeMessage = "";

    function submitFridgeMessage() {
        //1. way to add to store
        fridgeMessages.set([...$fridgeMessages, customFridgeMessage]);

        //2. way to add to store
        /*
        fridgeMessages.update((storeValue) => {
            storeValue.push(customFridgeMessage);
            return storeValue
            return [...$fridgeMessages, customFridgeMessage]
        });
        */

        customFridgeMessage = "";
    }

</script>

<button on:click={() => onShowLove(child.name)}>Show ❤️</button>
<button on:click={() => onEatCookie(child.name)}>Eat 🍪</button>

<input placeholder="Write a fridge message" bind:value={customFridgeMessage}>
<button on:click={submitFridgeMessage}>Submit fridge message</button>

<div 
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.blackSheep || "not-a-black-sheep"}
>

    <h3>{child.name}</h3>
</div>

<br>

<style>
    .is-boy {
        border: 5px solid blue;
    }

    .is-girl {
        border: 5px solid pink;
    }

    .not-a-black-sheep {
        background-color: aquamarine;
    }

    .medium-black-sheep {
        background-color: blueviolet;
    }

    .ultra-black-sheep {
        background-color: brown;
    }

</style>

