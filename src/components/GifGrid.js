import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifts';
import {GifGirdItem} from './GifGirdItem';

//import { GifGirdItem } from './GifGirdItem';

export const GifGrid = ( {category}) => {  
  const {data: images, loading} = useFetchGifs(category); 
  return (
    <>
    <h3>{category}</h3> 
    <div className="card-grid">  
    {loading && 'Cargando..'}    
        {
          images.map( img =>(              
            <GifGirdItem            
              key = {img.id}
              {...img}
            />
          ))
        }      
    </div>
    </>    
  )
}



