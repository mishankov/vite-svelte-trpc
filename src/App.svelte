<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  import { client } from './lib/trpc';

  let name: string | undefined;

  async function testApi() {
    let data = await client.userById.query("1")
    name = data?.name
  }

  testApi()

</script>

<main>
  
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://trpc.io/" target="_blank" rel="noreferrer"> 
      <img src="/logo_trpc.svg" class="logo trpc" alt="tRPC Logo" />
    </a>
  </div>
  {#if name}
    <h1>Hello {name}!</h1>
  {/if}

  <div class="card">
    <Counter />
  </div>

  <p class="read-the-docs">
    Click on the Vite, Svelte and tRPC logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>