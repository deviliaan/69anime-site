<script>
export let data;
const {anime} = data;
</script>
<div>
    <div class="grid grid-cols-2 w-full">
        <div class="w-full p-2">
            <img class="rounded" src="{anime?.image}" alt="{anime?.title}" />
        </div>
        <div class="w-full p-2 ">
            <div class="stats shadow w-full">
                <div class="stat p-2">
                    <div class="stat-title truncate">{anime?.title}</div>
                    <p class="text-sm">Mal Id: {anime?.malID}</p>
                    <p class="text-sm">Episodes: {anime?.totalEpisodes}</p>
                    <p class="text-sm">Type: {anime?.type}</p>
                </div>
            </div>
            <div class="stats shadow w-full mt-2">
                <div class="stat p-2">
                    <button class="btn text-accent">Add</button>
                </div>
            </div>
        </div>
    </div>
    <div class="stats shadow">
        <div class="stat p-2">
            <p class="stat-title text-accent">Synopsis</p>
            <p class="text-sm">{anime?.description}</p>
        </div>
    </div>
</div>