import { prisma } from "$lib/prisma";
export async function load() {
  await prisma.anime.findMany().then((data)=>{
    console.log(data)
  });  
  return {
    props: {
      foo: 'bar'
    }
  };
}