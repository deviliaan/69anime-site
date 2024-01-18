<script>
export let data;
const {anime} = data;
</script>
<div>
    <div class="grid grid-cols-2">
        <div class="w-full p-2">
            <img class="" src="{anime?.image}" alt="{anime?.title}" />
        </div>
        <div class="w-full p-2 flex flex-col flex-wrap">
            <div class="stats shadow">
                <div class="stat p-2">
                    <div class="stat-title">{anime?.title}</div>
                    <p class="text-sm">Mal Id: {anime?.malID}</p>
                    <p class="text-sm">Episodes: {anime?.totalEpisodes}</p>
                    <p class="text-sm">Type: {anime?.type}</p>
                </div>
            </div>
            <div class="stats shadow">
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