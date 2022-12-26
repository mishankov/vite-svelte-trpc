<script lang="ts">
  import { client } from "./trpc";

  let count: number = 0
  
  const getCounter = async () => {
    count = await client.getCounter.query()
  }
  
  const increment = async () => {
    count = await client.increaseCounter.mutate()
  }

  getCounter()
</script>

<button on:click={increment}>
  count is {count}
</button>
