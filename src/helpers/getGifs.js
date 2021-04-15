export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=3KdB6xujDx3IGO3O3w0Ze2KIa2Y2SPsz`;
  const resp = await fetch(url);
  const {data} = await resp.json();    

  const gifs = data.map( img => {

    return{
      id: img.id,
      url: img.images?.downsized_medium.url,
      title: img.title
    }
  })  

  return gifs;
}  