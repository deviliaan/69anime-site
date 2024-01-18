import {provider} from '$lib/provider'
export const load = async ({params}) => {
    const res = await provider.fetchAnimeInfo(params.slug).then((data)=>{
        return data
    })
    return {
        anime: res
    }
};