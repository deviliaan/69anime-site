<script>
export let data;
const {results} = data;
</script>

<div>
  <h2>Admin Page</h2>
  {#each results as anime}
    <h2>{anime.title}</h2>
  {/each}
</div>