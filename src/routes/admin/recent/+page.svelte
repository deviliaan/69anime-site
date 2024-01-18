<script>
export let data;
import Card from '$lib/components/Card.svelte';
const {results} = data;
</script>

<div class="w-full">
  <div class="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 p-2">
    {#each results as anime}
      <Card anime={anime} />
    {/each}
  </div>
</div>