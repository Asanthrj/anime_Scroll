"use client"
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { fetchAnime } from '../action';

let page = 2
const Loading = () => {
    const { ref, inView } = useInView();
    const [ data, setData] = useState<JSX.Element>([])
    useEffect ( ()=>{
        if(inView){
            fetchAnime(page).then(res=> {
                setData ([ ...data, ...res])
                page++
            })
        }
    },[inView,data])
  return (
<div>
    <section className=" flex flex-wrap w-[90vw] px-2 justify-between items-center ">
    {data}

   </section>
    <div ref={ref}>
        <img src="../assets/fade-stagger-circles.svg" alt="spinner"/>
    </div>
    </div>
  )
}

export default Loading