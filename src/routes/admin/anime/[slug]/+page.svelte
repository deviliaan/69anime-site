<script>
export let data;
const {anime} = data;
</script>
<div>
    <div class="grid grid-cols-2">
        <div class="w-full p-2">
            <img class="" src="{anime?.image}" alt="{anime?.title}" />
        </div>
        <div class="w-full p-2">
            <h1>{anime?.title}</h1>
            <div>
            </div>
        </div>
    </div>
</div>