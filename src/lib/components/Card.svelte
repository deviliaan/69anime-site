<script>
export let anime;
let isLoading = false;
</script>
<a href="/admin/anime/{anime?.id}" class="w-full h-full bg-base-100 shadow-xl image-full relative hover:cursor-pointer hover:opacity-50 {isLoading?'opacity-50':'opacity-100'} flex flex-col">
  <img class="w-full object-cover h-full" src="{anime?.image}" alt="Shoes" />
  <div class="hover:hidden absolute top-0 left-0 w-full h-full {isLoading ? 'flex justify-center items-center' : ''}">
    {#if isLoading}
        <span class="loading loading-spinner text-accent"></span>
    {/if}
    
  </div>
  <div class="mt-auto w-full">
    <h2 class="truncate bg-accent text-slate-500 text-sm text-center">{anime?.title}</h2>
  </div>
</a>