<script>
    import { onMount } from 'svelte';
    import io from 'socket.io-client';
  
    let messages = [];
    let message = '';
    const socket = io('/');
  
    onMount(() => {
      socket.on('chat message', (msg) => {
        messages = [...messages, msg];
      });
    });
  
    function sendMessage() {
      socket.emit('chat message', message);
      message = '';
    }
  </script>
  
  <div>
    <ul>
      {#each messages as msg}
        <li>{msg}</li>
      {/each}
    </ul>
    <input type="text" bind:value={message} on:keydown={(e) => e.key === 'Enter' && sendMessage()} />
    <button on:click={sendMessage}>Send</button>
  </div>
  