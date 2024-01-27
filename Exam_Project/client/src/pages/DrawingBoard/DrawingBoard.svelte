<script>
  import { Canvas } from 'svelte-canvas';
  import { onMount, onDestroy } from 'svelte';
  import io from 'socket.io-client';

  let socket;
  let canvas;
  let topSpace = 30;
  let ctx;
  let drawing = false;
  let lastX = 0;
  let lastY = 0;
  
  onMount(() => {
    socket = io('/');
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - topSpace;

    // Handle drawing data received from the server
    socket.on('draw', (data) => {
      drawLine(lastX, lastY, data.x, data.y);
      [lastX, lastY] = [data.x, data.y];
    });
  });

  onDestroy(() => {
    socket.disconnect();
  });

  function startDraw(event) {
    drawing = true;
    [lastX, lastY] = [event.clientX, event.clientY];
  }

  function endDraw() {
    drawing = false;
  }

  function handleDraw(event) {
    if (!drawing) return;
    drawLine(lastX, lastY, event.clientX, event.clientY);
    [lastX, lastY] = [event.clientX, event.clientY];
    // Emit drawing data to the server
    socket.emit('draw', { x: event.clientX, y: event.clientY });
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
</script>

<Canvas bind:this={canvas} 
on:mousedown={startDraw} 
on:mouseup={endDraw} 
on:mouseout={endDraw} 
on:mousemove={handleDraw} 
style="position: absolute; top: {topSpace}px; left: 0;"
></Canvas>