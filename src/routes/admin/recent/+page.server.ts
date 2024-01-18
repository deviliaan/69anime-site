import {provider} from '$lib/provider'
export async function load() {
    const res = await provider.fetchRecentEpisodes().then((data)=>{
        return data
    })
    return {
        currentPage: res.currentPage,
        hasNextPage: res.hasNextPage,
        results: res.results
    }
}