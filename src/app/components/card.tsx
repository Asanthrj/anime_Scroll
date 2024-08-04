import Image from 'next/image';
import React from 'react'
import Motion from './motion';

export interface AnimeProp {
    id: string;
    name: string;
    image: {
      original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
  }
  
  interface Prop {
    item: AnimeProp;
    index:number
  
  }

const Card = ({item,index}:Prop) => {
    const variant ={ hidden:{ opacity:0},visible:{ opacity:1, x: -79,
        y: -6,
        scale: 0.8,
        rotate: 0,}}
  return (
    <Motion className='w-[300px]  bg-[#508C9B] rounded-[12px] h-[280px] mb-10 relative' variants={variant} initial="hidden"    animate={"visible"} transition={{ delay:index * 0.28,ease:"easeInOut",duration:"0.5"}} viewport={{amount:0}}> 
<img src={`https://shikimori.one${item?.image?.original}`} alt={item.name}   className='w-[300px] h-[100%] rounded-[10px] mb-[10px]' />
<div className='flex justify-between absolute bottom-0 text-[20px] font-bold'><p> {item.name}</p>
<p>{item.score}</p> </div>

    </Motion>
  )
}

export default Card